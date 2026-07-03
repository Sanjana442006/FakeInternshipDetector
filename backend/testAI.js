import dotenv from "dotenv";

dotenv.config();

async function run() {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: "Say hello and explain what a fake internship is in one line",
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("OUTPUT:\n", data.choices?.[0]?.message?.content || data);
  } catch (err) {
    console.error(err);
  }
}

run();