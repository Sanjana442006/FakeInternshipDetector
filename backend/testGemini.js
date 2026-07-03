import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

async function run() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // 🔥 IMPORTANT: DO NOT specify model manually
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(
      "Explain fake internship in simple terms"
    );

    const response = await result.response;
    console.log(response.text());
  } catch (err) {
    console.error(err);
  }
}

run();