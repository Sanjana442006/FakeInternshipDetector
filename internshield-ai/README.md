# 🛡 InternShield AI

**InternShield AI** is an AI-powered web application that helps students identify fraudulent internship opportunities by analyzing internship descriptions using Artificial Intelligence. It provides a risk score, company verification, scam detection, AI explanations, and a downloadable analysis report to help students make informed decisions.

---

## 🚀 Features

- 🤖 AI-powered Internship Analysis
- 📊 Risk Score Generation
- 🛡 AI Verdict (Low, Medium, High Risk)
- 🏢 Company Verification
- ⭐ Trust Score
- 🚩 Red Flag Detection
- 🔍 AI Detection Breakdown
- 💡 AI Recommendation & Explanation
- 📄 Downloadable PDF Report
- 🕒 Recent Analysis History (Local Storage)
- 📱 Responsive User Interface

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js

### AI
- OpenRouter API
- GPT-4o Mini

### Libraries
- Axios
- jsPDF
- React Hooks

---

## 📂 Project Structure

```
FakeInternshipDetector
│
├── internshield-ai/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙ Installation

### Clone the Repository

```bash
git clone https://github.com/Sanjana442006/FakeInternshipDetector
```

### Frontend Setup

```bash
cd internshield-ai
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

---


## 📋 How It Works

1. Paste an internship description or job posting.
2. Click **Analyze with AI**.
3. The backend sends the internship details to the OpenRouter GPT-4o Mini model.
4. The AI evaluates the internship for scam indicators.
5. InternShield AI displays:
   - Risk Score
   - AI Verdict
   - Company Verification
   - Trust Score
   - Red Flags
   - AI Explanation
   - Detection Breakdown
6. Users can download a PDF report of the analysis.

---

## 🧠 AI Analysis Parameters

The AI evaluates internships based on:

- Registration fee requests
- Company legitimacy
- Salary realism
- Contact information
- Recruitment process
- Scam-related keywords
- Overall internship credibility

---



## 🎯 Future Enhancements

- URL-based internship analysis
- Browser extension for scam detection
- Verified company database
- OCR support for internship posters
- Multi-language support
- Email phishing detection
- Analytics dashboard

---

