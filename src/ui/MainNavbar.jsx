import { FaApple, FaSearch } from "react-icons/fa";

export default function MainNavbar() {
  const links = [
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Support",
    "Where to Buy",
  ];

  return (
    <nav className="w-full bg-black text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-3">
        <ul className="flex space-x-14 items-center">
        <FaApple className="text-white text-xl" />
          {links.map((link) => (
            <li
              key={link}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link}
            </li>
          ))}
        <FaSearch className="text-gray-300 text-sm hover:text-white cursor-pointer" />
        </ul>
      </div>
    </nav>
  );
}
