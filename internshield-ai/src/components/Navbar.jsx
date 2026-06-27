function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-5 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-700">
      <span className="text-3xl">🛡️</span> InternShield AI
      </h1>

      <div className="space-x-8 font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Reviews</a>
        <a href="#" className="hover:text-blue-600">Verified</a>
        <a href="#" className="hover:text-blue-600">About</a>
      </div>
    </nav>
  );
}

export default Navbar;