import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
// import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
// import Experience from "@/components/sections/Experience";
import SelectedWork from "@/components/sections/SelectedWork";
import Education from "@/components/sections/Education";
// import CurrentlyLearning from "@/components/sections/CurrentlyLearning";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-40 -left-40
               w-96 h-96
               rounded-full
               bg-blue-500/10
               blur-3xl"
        />

        <div
          className="absolute top-1/3 -right-40
               w-96 h-96
               rounded-full
               bg-violet-500/10
               blur-3xl"
        />
      </div>{" "}
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <SelectedWork />
      <Education />
      {/* <CurrentlyLearning /> */}
      <Footer />
    </main>
  );
}
