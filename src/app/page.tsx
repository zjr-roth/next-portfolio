import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-40 sm:mt-30 mx-auto px-12 py-4">
      <HeroSection />
      </div>
    </main>
  );
}
