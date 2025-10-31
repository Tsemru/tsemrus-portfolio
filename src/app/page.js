"use client";

import AboutSection from "@/components/AboutSection";
import Hero from "../components/Hero";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <div id="work-section">
      <WorkSection/>
      </div>
      <Footer/>
    </>
  );
}
