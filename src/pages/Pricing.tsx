import PageHeader from "../components/PageHeader";
import { Pricing as Plans, Formats } from "../components/Sections";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Ways to join"
        title="Start where"
        highlight="you are"
        sub="Create a free account to unlock first-come free sessions, programme enrolment and physical seat reservations."
      >
        <a href="#signup" className="btn btn-primary">
          Create your account
        </a>
      </PageHeader>
      <Plans />
      <Formats />
      <FAQ />
      <ContactCTA />
    </>
  );
}
