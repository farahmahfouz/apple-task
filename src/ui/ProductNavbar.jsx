export default function ProductNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-white/20 bg-neutral-900/80  backdrop-blur-sm  text-gray-300 text-sm z-50 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Product name */}
        <h1 className="text-white font-semibold text-xl">iPhone 16 Pro</h1>

        {/* Links */}
        <ul className="flex items-center space-x-6">
          <li className="text-white border-b border-white pb-0.5 cursor-pointer">Overview</li>
          <li className="hover:text-white cursor-pointer">Tech Specs</li>
          <li>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-full">
              Buy
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
