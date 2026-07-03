function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 text-center px-6 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-3xl mx-auto">

        <p className="text-blue-600 font-semibold tracking-widest uppercase">
          AI Internship Protection System
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-4 leading-tight text-slate-800">
          Detect Fake Internships <br />
          <span className="text-blue-600">Before You Apply</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          AI-powered system that analyzes internship descriptions and detects scams,
          fake offers, and misleading opportunities instantly.
        </p>

        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            ✓ AI Powered
          </span>

          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            ✓ Real-time Analysis
          </span>

          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            ✓ Scam Detection
          </span>
        </div>

      </div>
    </section>
  );
}

export default Hero;