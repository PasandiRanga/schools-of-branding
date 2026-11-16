import PageHeader from "../components/PageHeader";
import { ContactSection } from "../components/PageSections";
import FAQ from "../components/FAQ";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Get in"
        highlight="touch"
        sub="Whether you're ready to enrol or just have a question, we're here to help you take the next step."
      />
      <ContactSection />
      <FAQ />
    </>
  );
}
