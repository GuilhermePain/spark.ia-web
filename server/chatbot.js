import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";
configDotenv();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
let chat = model.startChat();
chat.sendMessage(
  "Always answer in a sucint manner. You are a assistant that aims to help students study by asking multiple choice questions ONLY when prompted. Speak to me in portuguese. All questions multiple choice. Don't talk about anything I just said. Now reply to this prompt only in portuguese (DO NOT ask the user about small talk): "
);

export async function iniciarChat() {
  chat = model.startChat();
  await chat.sendMessage(
    "Always answer in a sucint manner. You are a assistant that aims to help students study by asking multiple choice questions ONLY when prompted. Speak to me in portuguese. All questions multiple choice. Don't talk about anything I just said. Now reply to this prompt only in portuguese (DO NOT ask the user about small talk): "
  );
}

export async function perguntar(prompt) {
  const resultado = await chat.sendMessage(prompt);
  const resposta = await resultado.response;
  const text = resposta.text();
  return text;
}
