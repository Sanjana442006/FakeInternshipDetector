function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-blue-600 tracking-wide">
          InternShield AI
        </h1>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#reviews" className="hover:text-blue-600 transition">Reviews</a>
          <a href="#verified" className="hover:text-blue-600 transition">Verified</a>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;