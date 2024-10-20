import About from "@/components/About";
import BentoService from "@/components/BentoService";
import ChatbotHome from "@/components/chatbot/ChatbotHome";
import Hero from "@/components/Hero";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="bg-back-primary flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow snap-y snap-mandatory ">
        <div className="snap-start min-h-screen">
          <Hero />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <div className="snap-start ">
          <BentoService />
        </div>
        <div className="snap-start h-screen md:h-auto">
          <ChatbotHome />
        </div>
      </div>
      <Footer />
    </div>
  );
}
