"use client";

import Hero from "./components/Hero";
import FloatingAudio from "./components/FloatingAudio";
import CardsSection from "./components/Card";
import Gallery from "./components/Gallery";
import EnvelopeLetters from "./components/EnvelopeLetters";
import Library from "./components/Library";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import LockedOverlay from "./components/LockedOverlay";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <LockedOverlay />
      <Hero />
      <Countdown />
      <CardsSection />
      <Gallery />
      <EnvelopeLetters />
      <Library />
      <Footer />
      <FloatingAudio />
    </main>
  );
}