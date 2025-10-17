import { useEffect, useState } from "react";
import MainNavbar from "./ui/MainNavbar";
import ProductNavbar from "./ui/ProductNavbar";
import IPhoneCarousel from "./ui/IPhoneCarousel";
import HeroSection from "./components/HeroSection";
import HighlightSection from "./components/HighlightSection";
import SpliteSection from "./components/SpliteSection";
import MobileSection from "./components/MobileSection";

function App() {
  const [showProductNavbar, setShowProductNavbar] = useState(false);

  useEffect(() => {
    console.log("useEffect mounted ✅");

    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        return;
      }
      const heroHeight = document.getElementById("hero").offsetHeight;
      setShowProductNavbar(window.scrollY > heroHeight / 2);

    };

    window.addEventListener("scroll", handleScroll);
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white ">
      {/* Navbar */}
      {!showProductNavbar && <MainNavbar />}

      {/* Hero Section */}
      {showProductNavbar && <ProductNavbar />}

      <HeroSection />

      <HighlightSection />
      <IPhoneCarousel />
      <MobileSection />
      <SpliteSection />
    </div>
  );
}

export default App
