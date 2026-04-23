import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Navbar from "../components/Navbar";
import ServiceSection from "../components/ServiceSection";

function HomaPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection />
      <AboutSection />
      <MenuSection />
    </>
  );
}

export default HomaPage;
