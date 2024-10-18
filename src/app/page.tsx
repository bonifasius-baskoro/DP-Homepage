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
        <div className="snap-always snap-center min-h-screen">
          <Hero />
        </div>
        <div className="snap-always snap-center min-h-screen">
          <About />
        </div>
        <div className="snap-always snap-center min-h-screen">
          <BentoService />
        </div>
        <div className="snap-always snap-center min-h-screen">
          <ChatbotHome />
        </div>
      </div>
      <Footer />
    </div>
  );
}
