import { useReveal } from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import {
  Programmes,
  About,
  HowItWorks,
  WhyUs,
  Founders,
  Formats,
  Testimonials,
  Pricing,
} from "./components/Sections";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Programmes />
        <About />
        <HowItWorks />
        <WhyUs />
        <Founders />
        <Formats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
