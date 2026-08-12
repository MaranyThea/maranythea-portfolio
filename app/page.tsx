import AquaBackground from "@/components/background/AquaBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Footer from "@/components/layout/Footer";
import SelectedWork from "@/components/sections/SelectedWork";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* Animated Aqua Background */}
      <AquaBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Capabilities />
        <SelectedWork />
        <Education />
        <Footer />
      </div>
    </main>
  );
}