import { configDotenv } from "dotenv";
import { pbkdf2 } from "crypto";

configDotenv();

const SALT = process.env.SALT;


function hashSenha(senha) {
  return new Promise((resolve, reject) => {
    pbkdf2(senha, SALT, 310000, 32, "sha256", (err, hashSenha) => {
      if (err) return reject(err);
      resolve(hashSenha.toString("hex"));
    });
  });
}

export async function getUsuário(usuário) {
  //Fazer query no SQL para retornar um objeto contendo as informações de um usuário
}

function validarUsuário(usuário) {
  const regex = /^[a-zA-Z0-9_]+$/;
  return regex.test(usuário);
}

function validarSenha(senha) {
  const regex = /\s/;
  return !regex.test(senha);
}

export async function autenticarUsuário(usuário, senha) {
  const usuárioData = await getUsuário(usuário);
  const usuárioExiste = usuárioData != null;
  if (usuárioExiste) {
    //Checar hash da senha
    const hash = await hashSenha(senha);
    const hashCadastrado = usuárioData.senha;
    if (hash === hashCadastrado) {
      return usuárioData;
    } else {
      return Error("Senha inválida!");
    }
  } else {
    return Error("Usuário não cadastrado!");
  }
}
