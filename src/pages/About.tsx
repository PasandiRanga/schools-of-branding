import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { About as Story, Founders, Testimonials } from "../components/Sections";
import { ValuesGrid } from "../components/PageSections";
import ContactCTA from "../components/ContactCTA";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A school for"
        highlight="real founders"
        sub="Schools of Branding is an institute built on practical workshops — teaching budding entrepreneurs the craft of building brands people remember."
      >
        <Link to="/programmes" className="btn btn-primary">
          Explore programmes
        </Link>
        <Link to="/mentors" className="btn btn-ghost">
          Meet the mentors
        </Link>
      </PageHeader>
      <Story />
      <ValuesGrid />
      <Founders />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
