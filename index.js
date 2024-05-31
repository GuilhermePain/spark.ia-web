const { GoogleGenerativeAI } = require("@google/generative-ai");

require('dotenv').config()
// dotenv.config


const genAI = new GoogleGenerativeAI (process.env.OPENAI_API_KEY)


async function run() {
 
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Me explique sobre a revolução russa?"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();