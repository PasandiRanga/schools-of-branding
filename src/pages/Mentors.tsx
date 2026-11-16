import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { MentorsGrid } from "../components/PageSections";
import { Testimonials } from "../components/Sections";
import ContactCTA from "../components/ContactCTA";

export default function Mentors() {
  return (
    <>
      <PageHeader
        eyebrow="The people"
        title="Meet your"
        highlight="mentors"
        sub="Working designers, marketers and founders who teach from real experience — led by our co-founders, Janidu Chandrasekara and Hansana Janinda."
      >
        <Link to="/programmes" className="btn btn-primary">
          See what they teach
        </Link>
      </PageHeader>
      <MentorsGrid />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
