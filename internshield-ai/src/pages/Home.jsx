import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col items-center justify-center px-6">
<p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
AI-Powered Internship Verification
</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-slate-800">
          Detect Fake Internships
        </h1>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 mt-2">
          Before You Apply
        </h2>

        <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl">
          AI-powered platform that analyzes internship opportunities,
          detects scams, highlights red flags, and helps students make
          informed career decisions.
        </p>
        <div className="mt-4 flex gap-3 justify-center flex-wrap">
  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
    ✓ AI Powered
  </span>

  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
    ✓ Trusted by Students
  </span>

  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
    ✓ Scam Detection
  </span>
</div>

        <textarea
          placeholder="Paste internship description or URL here..."
          className="mt-10 w-full max-w-4xl h-56 p-5 rounded-2xl border border-gray-300 shadow-xl resize-none focus:outline-none focus:ring-4 focus:ring-blue-300"
        />
<button className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-all duration-300 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-xl">
    Analyze Internship →
</button>
<Features />
<Footer />


      </div>
    </>
  );
}

export default Home;