'use client'

import HeaderWrapper from "@/components/header/HeaderWrapper";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  
  return (
    <main className='relative'>

      <HeaderWrapper />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Footer />

    </main>
  );
}
