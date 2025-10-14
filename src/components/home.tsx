import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}