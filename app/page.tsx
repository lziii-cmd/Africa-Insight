import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Methodology from "@/components/Methodology";
import Coverage from "@/components/Coverage";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Sectors />
      <Methodology />
      <Coverage />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
