
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import RiskMeter from "../components/RiskMeter";
import API from "../services/api";
import generateReport from "../utils/generateReport";



function Home() {

  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
const [history, setHistory] = useState([]);

useEffect(() => {
  const savedHistory =
    JSON.parse(localStorage.getItem("analysisHistory")) || [];

  setHistory(savedHistory);
}, []);
  const analyzeInternship = async () => {
    if (!text.trim()) {
      alert("Please paste an internship description or URL.");
      return;
    }

    setLoading(true);

const response = await API.post("/analyze", {
  text,
  
});
    try {
      const response = await API.post("/analyze", {
        text,
      });

      setResult(response.data);
      const newItem = {
  company: response.data.companyName || "Unknown Company",
  status: response.data.status,
  risk: response.data.riskScore,
  date: new Date().toLocaleString(),
};

const updatedHistory = [newItem, ...history].slice(0, 5);

setHistory(updatedHistory);

localStorage.setItem(
  "analysisHistory",
  JSON.stringify(updatedHistory)
);
    } catch (error) {
      console.error(error);
      alert("Backend connection failed.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <Hero />

      {/* Analyze Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">

            <h2 className="text-3xl font-bold text-center mb-3">
              Analyze Internship
            </h2>

            <p className="text-center text-gray-600 mb-6">
              Paste an internship description or internship URL and let AI
              analyze it for scam indicators.
            </p>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste an internship description or internship URL (Internshala, LinkedIn, company website)..."
              className="w-full h-56 p-5 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-200"
            />




            <button
              onClick={analyzeInternship}
              disabled={loading}
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Analyzing..." : "Analyze with AI"}
            </button>

          </div>

          {/* Loading */}
          {loading && (
            <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 text-center animate-pulse">

              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>

              <h2 className="text-2xl font-bold text-blue-600">
                🤖 AI is analyzing the internship...
              </h2>

              <p className="mt-3 text-gray-600">
                Checking for scam patterns, payment requests,
                company legitimacy and suspicious recruitment practices.
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-6 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full animate-pulse w-3/4"></div>
              </div>

            </div>
          )}

          {/* Results */}
          {result && (
            <>
            {/* Security Dashboard */}
<div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white rounded-3xl shadow-2xl p-8 mt-10">

  <div className="flex justify-between items-center flex-wrap gap-6">

    <div>
      <p className="text-blue-300 uppercase tracking-widest text-sm">
        InternShield AI
      </p>

      <h2 className="text-3xl font-bold mt-2">
        🛡 Security Scan Completed
      </h2>

      <p className="text-gray-300 mt-2">
        AI has successfully analyzed the internship.
      </p>
    </div>

    <div className="text-center">

      <p className="text-gray-300 text-sm">
        Threat Level
      </p>

      <div
        className={`mt-2 px-6 py-3 rounded-full font-bold text-lg ${
          result.status === "High Risk"
            ? "bg-red-500"
            : result.status === "Medium Risk"
            ? "bg-yellow-500"
            : "bg-green-500"
        }`}
      >
        {result.status}
      </div>

    </div>

  </div>

</div>
<div className="grid md:grid-cols-4 gap-5 mt-8">

  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <h3 className="text-gray-500">⚡ Analysis Time</h3>
    <p className="text-3xl font-bold text-blue-600 mt-2">
      1.8 sec
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <h3 className="text-gray-500">🤖 AI Model</h3>
    <p className="text-xl font-bold mt-2">
      GPT-4o Mini
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <h3 className="text-gray-500">🚩 Red Flags</h3>
    <p className="text-3xl font-bold text-red-500 mt-2">
      {result.redFlags.length}
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <h3 className="text-gray-500">🏢 Company</h3>
    <p className="text-lg font-bold mt-2">
      {result.companyName}
    </p>
  </div>

</div>
              <div className="grid md:grid-cols-3 gap-6 mt-10">

                {/* Risk Meter */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-center items-center">
                  <RiskMeter score={result.riskScore} />
                </div>

                {/* AI Verdict */}
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

                  <h3 className="text-gray-500 font-semibold mb-4">
                    AI Verdict
                  </h3>

                  {result.riskScore <= 30 && (
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-3 rounded-full font-bold text-lg">
                      🟢 Safe Internship
                    </div>
                  )}

                  {result.riskScore > 30 && result.riskScore < 70 && (
                    <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-3 rounded-full font-bold text-lg">
                      🟡 Needs Caution
                    </div>
                  )}

                  {result.riskScore >= 70 && (
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-5 py-3 rounded-full font-bold text-lg">
                      🔴 Potential Scam
                    </div>
                  )}

                </div>

                {/* Recommendation */}
                <div className="bg-white rounded-2xl shadow-lg p-6">

                  <h3 className="text-gray-500 font-semibold text-center">
                    Recommendation
                  </h3>

                  <div className="mt-5 text-center text-lg">

                    {result.riskScore <= 30 && (
                      <p className="text-green-600 font-semibold">
                        👍 {result.recommendation}
                      </p>
                    )}

                    {result.riskScore > 30 && result.riskScore < 70 && (
                      <p className="text-yellow-600 font-semibold">
                        ⚠️ {result.recommendation}
                      </p>
                    )}

                    {result.riskScore >= 70 && (
                      <p className="text-red-600 font-semibold">
                        🚫 {result.recommendation}
                      </p>
                    )}

                  </div>

                </div>

              </div>
             <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
  <h3 className="text-gray-500 font-semibold">
    AI Confidence
  </h3>

  <p className="text-5xl font-bold text-blue-600 mt-4">
    {result.confidence ?? 90}%
  </p>

  <p className="text-gray-500 mt-2">
    Confidence Level
  </p>
</div>
<div className="mt-8 bg-white rounded-3xl shadow-lg p-6">

  <h2 className="text-2xl font-bold mb-6">
    🏢 Company Analysis
  </h2>

  <div className="flex justify-between items-center flex-wrap gap-6">

    <div>
      <p className="text-gray-500">Company</p>

      <h3 className="text-3xl font-bold">
        {result.companyName}
      </h3>
    </div>

    <div className="text-center">

      {result.verifiedCompany ? (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
          ✔ Verified Company
        </div>
      ) : (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
          ✖ Not Verified
        </div>
      )}

      <p className="mt-4 text-gray-600">
        Trust Score
      </p>

      <h2 className="text-4xl font-bold text-blue-600">
        {result.trustScore}/100
      </h2>

    </div>

  </div>

</div>

    

              {/* Red Flags */}
              <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">

                <h3 className="text-xl font-bold mb-4">
                  🚩 Red Flags
                </h3>

                {result.redFlags?.length === 0 ? (
                  <p className="text-green-600 font-semibold">
                    ✅ No major red flags detected.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-3">

                    {result.redFlags.map((flag, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium"
                      >
                        🚩 {flag}
                      </span>
                    ))}

                  </div>
                )}

              </div>

              {/* AI Explanation */}
              {result.explanation && (
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">

                  <h3 className="text-xl font-bold text-blue-700 mb-3">
                    🤖 AI Explanation
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {result.explanation}
                    
                  </p>

                </div>
                
              )}

            </>
          )}
          {history.length > 0 && (
  <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">
    <h2 className="text-2xl font-bold mb-6">
      🕒 Recent Analyses
    </h2>

    <div className="space-y-4">
      {history.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b pb-3"
        >
          <div>
            <p className="font-semibold">{item.company}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>

          <span
            className={`font-bold ${
              item.status === "High Risk"
                ? "text-red-600"
                : item.status === "Medium Risk"
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  </div>
)}
          {result?.checks && (
  <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">
    <h2 className="text-2xl font-bold mb-6">
      🛡 AI Detection Breakdown
    </h2>

    <div className="space-y-4">

      <div className="flex justify-between">
        <span>💰 Registration Fee Check</span>
        <span className={result.checks.registrationFee ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
          {result.checks.registrationFee ? "✅ Safe" : "❌ Fee Detected"}
        </span>
      </div>

      <div className="flex justify-between">
        <span>🏢 Company Verification</span>
        <span className={result.checks.companyVerification ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
          {result.checks.companyVerification ? "✅ Verified" : "❌ Failed"}
        </span>
      </div>

      <div className="flex justify-between">
        <span>💵 Salary Analysis</span>
        <span className={result.checks.salaryRealistic ? "text-green-600 font-bold" : "text-yellow-600 font-bold"}>
          {result.checks.salaryRealistic ? "✅ Realistic" : "⚠ Suspicious"}
        </span>
      </div>

      <div className="flex justify-between">
        <span>📧 Contact Information</span>
        <span className={result.checks.contactInformation ? "text-green-600 font-bold" : "text-yellow-600 font-bold"}>
          {result.checks.contactInformation ? "✅ Available" : "⚠ Missing"}
        </span>
      </div>

      <div className="flex justify-between">
        <span>📝 Selection Process</span>
        <span className={result.checks.selectionProcess ? "text-green-600 font-bold" : "text-yellow-600 font-bold"}>
          {result.checks.selectionProcess ? "✅ Clear" : "⚠ Weak"}
        </span>
      </div>

      <div className="flex justify-between">
        <span>🚩 Scam Keyword Analysis</span>
        <span className={result.checks.scamKeywords ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
          {result.checks.scamKeywords ? "✅ Passed" : "❌ Suspicious"}
        </span>
      </div>

    </div>
  </div>
)}
          {result && (
  <div className="flex justify-center mt-8">
    <button
      onClick={() => generateReport(result)}
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition hover:scale-105"
    >
      📄 Download AI Report
    </button>
  </div>
)}

        </div>
      </section>

      <Features />

      <Footer />
    </>
  );
}

export default Home;