import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Resume from "./components/Resume";
import routes from "tempo-routes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Navbar />
        <main className="flex flex-col min-h-screen">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Resume />
          <Contact />
          <Footer />
        </main>
      </>
    </Suspense>
  );
}

export default App;
