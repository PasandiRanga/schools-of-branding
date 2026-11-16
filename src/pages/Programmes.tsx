import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Marquee from "../components/Marquee";
import { ProgrammesList } from "../components/PageSections";
import { Formats, HowItWorks } from "../components/Sections";
import ContactCTA from "../components/ContactCTA";

export default function Programmes() {
  return (
    <>
      <PageHeader
        eyebrow="Our programmes"
        title="Programmes that"
        highlight="build brands"
        sub="Practical, hands-on tracks in branding, marketing, content, social media and packaging design — join live online or in person."
      >
        <a href="#signup" className="btn btn-primary">
          Join a free session
        </a>
        <Link to="/pricing" className="btn btn-ghost">
          See ways to join
        </Link>
      </PageHeader>
      <Marquee />
      <ProgrammesList />
      <Formats />
      <HowItWorks />
      <ContactCTA />
    </>
  );
}
