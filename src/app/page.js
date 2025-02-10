"use client"
import Image from "next/image";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
