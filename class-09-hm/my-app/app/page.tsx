
import HeroSection from "./Components/HeroSection";
import FeaturedProduct from "./Components/FeaturedProduct";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <FeaturedProduct />
      <Footer />
    </div>
  );
}
