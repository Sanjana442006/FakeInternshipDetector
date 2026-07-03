import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Verified Companies Database
const verifiedCompanies = [
  "Microsoft",
  "Google",
  "Amazon",
  "Apple",
  "Meta",
  "Netflix",
  "Adobe",
  "Oracle",
  "IBM",
  "Intel",
  "Infosys",
  "TCS",
  "Wipro",
  "Accenture",
  "Capgemini",
  "Cognizant",
  "HCL",
  "Zoho",
  "Flipkart",
  "Paytm",
  "Reliance",
];

router.post("/analyze", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        error: "Internship description is required.",
      });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          temperature: 0.3,
          messages: [
            {
              role: "system",
              content:
                "You are an AI internship scam detector. Always respond ONLY with valid JSON. Do not include markdown or code blocks.",
            },
            {
              role: "user",
              content: `
Analyze the following internship description.

Internship:
${text}

Return ONLY this JSON:
{
  "riskScore": number,
  "status": "Low Risk | Medium Risk | High Risk",
  "confidence": number,
  "companyName": "string",
  "verifiedCompany": true,
  "trustScore": number,
  "redFlags": [],
  "recommendation": "",
  "explanation": "",
  "checks": {
    "registrationFee": true,
    "companyVerification": true,
    "salaryRealistic": true,
    "contactInformation": true,
    "selectionProcess": true,
    "scamKeywords": true
  }
}
`,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const aiText = data.choices?.[0]?.message?.content || "";

    const cleanText = aiText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {
      console.log(cleanText);
      parsed = JSON.parse(cleanText);
      console.log("AI companyName:", parsed.companyName);

let company = (parsed.companyName || "")
  .toLowerCase()
  .replace(/\b(india|limited|ltd|private|pvt|inc|corporation|corp|technologies|technology)\b/g, "")
  .replace(/[.,]/g, "")
  .replace(/\s+/g, " ")
  .trim();

console.log("Normalized company:", company);

const isVerified = verifiedCompanies.some((c) =>
  company.includes(c.toLowerCase())
);

console.log("Verified:", isVerified);

parsed.verifiedCompany = isVerified;
if (isVerified) {
  parsed.trustScore = 90;
} else {
  parsed.trustScore = 45;
}

      // Defaults
      parsed.riskScore = parsed.riskScore ?? 50;
      parsed.status = parsed.status ?? "Unknown";
      parsed.companyName = parsed.companyName ?? "Unknown Company";
      parsed.redFlags = parsed.redFlags ?? [];
      parsed.checks = parsed.checks ?? {
  registrationFee: true,
  companyVerification: parsed.verifiedCompany,
  salaryRealistic: true,
  contactInformation: true,
  selectionProcess: true,
  scamKeywords: true,
};
      parsed.recommendation =
        parsed.recommendation ?? "No recommendation available.";
      parsed.explanation =
        parsed.explanation ?? "No explanation available.";

      // Confidence based on Risk Score
      parsed.confidence = 100 - Math.floor(parsed.riskScore / 2);

      parsed.checks = {
  registrationFee: !text.toLowerCase().includes("registration fee") &&
                   !text.toLowerCase().includes("pay") &&
                   !text.toLowerCase().includes("payment"),

  companyVerification: parsed.verifiedCompany,

  salaryRealistic:
    parsed.riskScore < 70,

  contactInformation:
    text.toLowerCase().includes("@") ||
    text.toLowerCase().includes("www") ||
    text.toLowerCase().includes("http"),

  selectionProcess:
    text.toLowerCase().includes("interview") ||
    text.toLowerCase().includes("assessment") ||
    text.toLowerCase().includes("test"),

  scamKeywords:
    parsed.redFlags.length === 0,
};
    } catch (err) {
      parsed = {
       
  "riskScore": 0,
  "status": "Low Risk | Medium Risk | High Risk",
  "confidence": 95,
  "companyName": "",
  "verifiedCompany": false,
  "trustScore": 0,
  "redFlags": [],
  "recommendation": "",
  "explanation": "",
  
  "matchingSkills": [],
  "missingSkills": [],
  "resumeSuggestion": ""

      };
    }
 console.log("AI Response:", parsed);
    res.json(parsed);
  
  }  catch (err) {
  console.error("Parse Error:", err);
    res.status(500).json({
      error: "Server Error",
      message: err.message,
    });
  }
});

export default router;