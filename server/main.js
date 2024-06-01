/*===========IMPORTS===========*/
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import { fileURLToPath } from "url";
import { autenticarUsuário, novoUsuário } from "./db.js";
import { iniciarChat, perguntar } from "./chatbot.js";

const app = express();

/*===========CONFIGURAÇÕES INICIAIS===========*/
//Setup do __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(path.resolve(__dirname, "../client/dist")));

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
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "senha",
    },
    async function verify(email, senha, cb) {
      const resultado = await autenticarUsuário(email, senha);
      if (resultado instanceof Error) {
        return cb(null, false, { message: resultado.message });
      } else {
        return cb(null, {
          id: resultado._id,
          email: resultado.email,
        });
      }
    }
  )
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
    cb(null, { id: user.id, email: user.email });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

/*===========ROTAS===========*/
// Chatbot
app.get("/api/perguntar/:pergunta", async (req, res, _) => {
  res.json(await perguntar(req.params.pergunta));
});

app.post("/api/iniciarchat", async (_, res, __) => {
  res.json(await iniciarChat());
});

app.post("/api/novousuario", async (req, res, __) => {
  const resultado = await novoUsuário(
    req.body.nome,
    req.body.email,
    req.body.senha,
    req.body.confirmarsenha
  );
  if (resultado instanceof Error) {
    return res.redirect(`/cadastro?erro=${resultado.message}`);
  } else {
    return res.redirect(`/cadastro?sucesso=true`);
  }
});

// Autenticação
app.post("/api/autenticar", (req, res, next) => {
  passport.authenticate("local", (_, usuário, info) => {
    if (usuário) {
      req.login(usuário, (erro) => {
        if (erro) return res.redirect(`/login?erro=${erro.message}`);
        else return res.redirect("/chat");
      });
    } else {
      res.redirect(`/login?erro=${info.message}`);
    }
  })(req, res, next);
});

//Logout
app.post("/api/sair", async (req, res) => {
  req.logOut((erro) => {
    if (erro) res.status(500).send({ message: "Não foi possível sair" });
    else {
      res.status(200).send({ message: "Saída feita com sucesso" });
    }
  });
});

//Checar autenticação
app.get("/api/checkAutenticado", async (req, res) => {
  if (!req.user) res.status(200).send([false, null]);
  else res.status(200).send([req.isAuthenticated(), req.user]);
});

// Todas as outras solicitações GET não tratadas retornarão o app em React
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});
