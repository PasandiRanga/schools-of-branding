import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import {
  Programmes,
  About,
  HowItWorks,
  WhyUs,
  Founders,
  Formats,
  Testimonials,
  Pricing,
} from "../components/Sections";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
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
    </>
  );
}
