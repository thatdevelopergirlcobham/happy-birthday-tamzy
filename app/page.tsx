import Hero from "./components/Hero";
import FloatingAudio from "./components/FloatingAudio";
import CardsSection from "./components/Card";
import Gallery from "./components/Gallery";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Countdown />
      <CardsSection />
      <Gallery />
      <Footer />
      <FloatingAudio />
    </main>
  );
}