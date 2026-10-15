import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Methodology from "@/components/site/Methodology";
import Stats from "@/components/site/Stats";
import CaseStudies from "@/components/site/CaseStudies";
import Training from "@/components/site/Training";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Stats />
        <CaseStudies />
        <Training />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}