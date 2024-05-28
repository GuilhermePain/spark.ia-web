/*===========IMPORTS===========*/
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import { fileURLToPath } from "url";

const app = express();

/*===========CONFIGURAÇÕES INICIAIS===========*/
//Setup do __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Ler o dotenv
dotenv.config();

//Usar o body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Usar o passport
app.use(passport.initialize());

/*===========CORS===========*/
const origensPermitidas = ["http://localhost:3000", "http://127.0.0.1:3000"];
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origensPermitidas.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  next();
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});

// Fazer com que o Node sirva os arquivos do app em React criado
app.use(express.static(path.resolve(__dirname, "../client/build")));

/*===========AUTENTICAÇÃO===========*/
//Setup de autenticação
passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    const resultado = await autenticarUsuário(username, password);
    if (resultado instanceof Error) {
      return cb(null, false, { message: resultado.message });
    } else {
      return cb(null, {
        id: resultado._id,
        usuário: resultado.usuário,
      });
    }
  })
);

//Configurar session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.authenticate("session"));

//Serialização e deserialização
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.usuário });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

/*===========ROTAS===========*/
// Autenticação
app.post("/login/autenticar", (req, res, next) => {
  passport.authenticate("local", (_, usuário, info) => {
    if (usuário) {
      req.login(usuário, (erro) => {
        if (erro) return res.redirect(`/login?erro=${erro.message}`);
        else return res.redirect("/home");
      });
    } else {
      res.redirect(`/login?erro=${info.message}`);
    }
  })(req, res, next);
});

// Todas as outras solicitações GET não tratadas retornarão o app em React
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
