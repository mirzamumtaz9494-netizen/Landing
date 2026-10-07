import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIAgents from "@/components/AIAgents";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import WhyTeqdeepseek from "@/components/WhyTeqdeepseek";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyTeqdeepseek />
      <Services />
      <AIAgents />
      <Solutions />
      <Process />
      <Contact />
    </>
  );
}
