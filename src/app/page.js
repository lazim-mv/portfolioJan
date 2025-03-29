"use client"
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" role="document" >
      <nav className="sr-only focus-within:not-sr-only" aria-label="Skip links">
        <a href="#main-content" className="fixed top-0 left-0 p-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-white translate-y-0">
          Skip to main content
        </a>
        <a href="#about" className="fixed top-0 left-0 p-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-white translate-y-10">
          Skip to about section
        </a>
        <a href="#projects" className="fixed top-0 left-0 p-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-white translate-y-20">
          Skip to projects section
        </a>
        <a href="#contact" className="fixed top-0 left-0 p-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-white translate-y-30">
          Skip to contact section
        </a>
      </nav>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}