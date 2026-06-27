import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6">

        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Detect Fake Internships Before You Apply
        </h1>

        <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl">
          InternShield AI helps students verify internship opportunities using
          AI-powered scam detection, company verification, and student reviews.
        </p>

        <textarea
          placeholder="Paste internship description or URL..."
          className="w-full max-w-3xl h-48 p-5 rounded-xl border shadow-lg resize-none"
        />

        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Analyze Internship
        </button>

      </div>
    </>
  );
}

export default Home;