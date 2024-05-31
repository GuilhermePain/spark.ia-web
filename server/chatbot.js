const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function perguntar(prompt) {
  const resultado = await model.generateContent(prompt);
  const resposta = await resultado.response;
  const text = resposta.text();
  return text;
}
