export default function ContactCTA() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta reveal">
          <h2>Ready to build your brand?</h2>
          <p>
            Create a free account to enrol in programmes, claim first-come free
            sessions, get your meeting links and reserve seats for in-person
            workshops. Have a question first? Reach out — we'd love to help.
          </p>
          <div className="cta__actions">
            <a href="#signup" className="btn btn-accent">
              Create your account
            </a>
            <a href="mailto:hello@schoolsofbranding.com" className="btn btn-ghost">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
