import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </main>
  );
}
