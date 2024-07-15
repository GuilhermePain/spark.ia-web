import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";
import { parse } from "node-html-parser";

configDotenv();

const DEFAULT_PROMPT =
  "When someone asks about a url, use the URL CONTENT to answer it. Only ask about URLs when prompted to do so. Always answer in a sucint manner. You are a assistant that aims to help students study by asking multiple choice questions ONLY when prompted. Speak to me in portuguese. All questions multiple choice. Don't talk about anything I just said. Now reply to this prompt only in portuguese (DO NOT ask the user about small talk): ";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
let chat = model.startChat();
chat.sendMessage(DEFAULT_PROMPT);

export async function iniciarChat() {
  chat = model.startChat();
  await chat.sendMessage(DEFAULT_PROMPT);
}

function checarValidadeURL(url) {
  let urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!urlPattern.test(url);
}

function pegarURL(mensagem) {
  let palavrasMensagem = mensagem.split(" ");
  let URL = "";
  palavrasMensagem.forEach((palavra) => {
    if (checarValidadeURL(palavra)) {
      {
        URL = palavra;
      }
    }
  });
  return URL;
}

function removerEspacosENovasLinhas(input) {
  let output = input.replace(/\n\s*\n/g, "\n");
  output = output.replace(/\s\s+/g, " ");
  output = output.trim();
  return output;
}

async function pegarTextoSite(URL) {
  let texto = await fetch(URL)
    .then(async (res) => {
      const html = await res.text();
      const root = parse(html);
      const tags = root.querySelectorAll(
        "p, span, div, h1, h2, h3, h4, h5, h6, li, a"
      );
      let textoExtraído = "";
      tags.forEach((tag) => {
        textoExtraído += tag.textContent + " ";
      });
      return textoExtraído;
    })
    .catch((err) => {
      console.log(err);
      return "";
    });
  return removerEspacosENovasLinhas(texto);
}

export async function perguntar(prompt) {
  let texto;
  let URL = pegarURL(prompt);

  try {
    if (URL) {
      prompt = prompt + "WEBSITE CONTENT:" + (await pegarTextoSite(URL));
    }
    const resultado = await chat.sendMessage(prompt);
    const resposta = await resultado.response;
    texto = resposta.text();
  } catch {
    texto = "Por favor aguarde antes de fazer mais perguntas. 😓";
  }
  const regex = /([A-Za-z])\)/g;
  return texto.replaceAll(regex, "  \n**$1)**");
}
