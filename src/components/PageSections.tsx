import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Megaphone,
  PenTool,
  Share2,
  Package,
  Rocket,
  Target,
  MessageSquare,
  Heart,
  Users,
  Mail,
  Check,
  Clock,
  Monitor,
  BarChart3,
  ArrowRight,
  Send,
  type LucideIcon,
} from "lucide-react";
import {
  PROGRAMME_DETAILS,
  VALUES,
  MENTORS,
  CONTACT_METHODS,
} from "../data/content";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Megaphone,
  PenTool,
  Share2,
  Package,
  Rocket,
  Target,
  MessageSquare,
  Heart,
  Users,
  Mail,
};

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const C = ICONS[name] ?? Sparkles;
  return <C size={size} strokeWidth={2.2} />;
}

/* ---------------- Detailed programmes list ---------------- */
export function ProgrammesList() {
  return (
    <section className="section">
      <div className="container proglist">
        {PROGRAMME_DETAILS.map((p, i) => (
          <article
            className="progrow reveal"
            key={p.title}
            style={{ background: p.tint }}
          >
            <div className={`progrow__media ${i % 2 ? "is-right" : ""}`}>
              <img src={p.img} alt="" loading="lazy" />
            </div>
            <div className="progrow__body">
              <div className="progrow__icon">
                <Icon name={p.icon} />
              </div>
              <h2>{p.title}</h2>
              <div className="progrow__meta">
                <span>
                  <Clock size={15} /> {p.duration}
                </span>
                <span>
                  <Monitor size={15} /> {p.format}
                </span>
                <span>
                  <BarChart3 size={15} /> {p.level}
                </span>
              </div>
              <p>{p.desc}</p>
              <ul className="progrow__outcomes">
                {p.outcomes.map((o) => (
                  <li key={o}>
                    <Check size={17} strokeWidth={3} /> {o}
                  </li>
                ))}
              </ul>
              <a href="#signup" className="btn btn-primary btn-sm">
                Enrol in this programme <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Values grid ---------------- */
export function ValuesGrid() {
  return (
    <section className="section section--band">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">
            <span className="dot" /> What we stand for
          </span>
          <h2 className="reveal" data-delay="60">
            How we <span className="hl">teach</span>
          </h2>
        </div>
        <div className="whyus">
          {VALUES.map((v, i) => (
            <div className="feature reveal" key={v.title} data-delay={(i % 4) * 80}>
              <div className="feature__icon">
                <Icon name={v.icon} size={22} />
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Full mentors grid ---------------- */
export function MentorsGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="people">
          {MENTORS.map((p, i) => (
            <article className="person reveal" key={p.name} data-delay={(i % 3) * 80}>
              <div className="person__photo">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="person__body">
                <span className="person__role">{p.role}</span>
                <h3>{p.name}</h3>
                <p>{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact section (methods + form) ---------------- */
export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section">
      <div className="container contact">
        <div className="contact__info">
          <div className="section-head">
            <span className="eyebrow reveal">
              <span className="dot" /> We'd love to hear from you
            </span>
            <h2 className="reveal" data-delay="60" style={{ fontSize: "var(--fs-h2)", marginTop: "1.1rem" }}>
              Let's talk
            </h2>
            <p className="reveal" data-delay="120" style={{ marginTop: "1.1rem" }}>
              Questions about a programme, reserving a seat, or running a workshop
              for your team? Send us a note and we'll get back to you.
            </p>
          </div>
          <div className="contact__methods">
            {CONTACT_METHODS.map((m, i) => (
              <div className="contact-method reveal" key={m.title} data-delay={i * 70}>
                <div className="contact-method__icon">
                  <Icon name={m.icon} size={20} />
                </div>
                <div>
                  <b>{m.title}</b>
                  <span>{m.detail}</span>
                  <small>{m.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          className="contact__form reveal"
          data-delay="120"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="contact__sent">
              <div className="contact__sent-icon">
                <Check size={30} strokeWidth={3} />
              </div>
              <h3>Thanks — message received!</h3>
              <p>
                We'll reply to you by email soon. In the meantime, feel free to
                browse our programmes.
              </p>
              <Link to="/programmes" className="btn btn-accent">
                View programmes
              </Link>
            </div>
          ) : (
            <>
              <h3>Send a message</h3>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required placeholder="Jane Founder" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@email.com" />
              </div>
              <div className="field">
                <label htmlFor="topic">I'm interested in</label>
                <select id="topic" name="topic" defaultValue="A programme">
                  <option>A programme</option>
                  <option>A free session</option>
                  <option>Reserving a physical seat</option>
                  <option>A workshop for my team</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell us a little about what you're working on…" />
              </div>
              <button type="submit" className="btn btn-primary">
                Send message <Send size={16} />
              </button>
              <p className="contact__note">
                This is a demo form — account sign-in and messaging are wired up in
                a later phase.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
