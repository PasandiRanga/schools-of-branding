import {
  Sparkles,
  Megaphone,
  PenTool,
  Share2,
  Package,
  Rocket,
  GraduationCap,
  Users,
  Globe,
  Ticket,
  Check,
  Star,
  ArrowRight,
  Monitor,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import {
  PROGRAMMES,
  STATS,
  STEPS,
  FEATURES,
  FOUNDERS,
  TESTIMONIALS,
  PLANS,
} from "../data/content";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Megaphone,
  PenTool,
  Share2,
  Package,
  Rocket,
  GraduationCap,
  Users,
  Globe,
  Ticket,
};

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const C = ICONS[name] ?? Sparkles;
  return <C size={size} strokeWidth={2.2} />;
}

/* ---------------- Programmes ---------------- */
export function Programmes() {
  return (
    <section className="section section--band" id="programmes">
      <div className="container">
        <div className="prog__head">
          <div className="section-head">
            <span className="eyebrow reveal">
              <span className="dot" /> Our programmes
            </span>
            <h2 className="reveal" data-delay="60">
              Pick a <span className="hl">programme</span>
            </h2>
          </div>
          <a href="#programmes" className="btn btn-accent btn-sm reveal" data-delay="120">
            View all programmes <ArrowRight size={18} />
          </a>
        </div>

        <div className="prog__grid">
          {PROGRAMMES.map((p, i) => (
            <article
              className="prog-card reveal"
              key={p.title}
              data-delay={(i % 2) * 90}
              style={{ background: p.tint }}
            >
              <div className="prog-card__media">
                <img src={p.img} alt="" loading="lazy" />
              </div>
              <div className="prog-card__icon">
                <Icon name={p.icon} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="prog-card__tag">
                Learn more <ArrowRight size={15} style={{ display: "inline", verticalAlign: "-2px" }} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About + stats ---------------- */
export function About() {
  return (
    <section className="section section--band" id="about">
      <div className="container about">
        <div>
          <span className="eyebrow reveal">
            <span className="dot" /> Our story
          </span>
          <h2 className="reveal" data-delay="60" style={{ fontSize: "var(--fs-h2)", marginTop: "1.1rem" }}>
            Helping founders turn ideas into brands
          </h2>
          <p className="reveal" data-delay="120" style={{ marginTop: "1.1rem", fontSize: "var(--fs-lead)" }}>
            Schools of Branding is an institute built on practical workshops and
            programmes. Founded by Janidu Chandrasekara and Hansana Janinda, we
            teach budding entrepreneurs the real craft of branding — strategy,
            marketing, content, social media and packaging — through sessions you
            can join online or in person.
          </p>
          <div className="stats">
            {STATS.map((s, i) => (
              <div className="stat reveal" key={s.label} data-delay={i * 80}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about__visual reveal" data-delay="100">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=70"
            alt="A branding workshop in progress"
            loading="lazy"
          />
          <span className="about__badge">Trusted by 1200+ founders</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">
            <span className="dot" /> How it works
          </span>
          <h2 className="reveal" data-delay="60">
            From sign-up to <span className="hl">your brand</span>
          </h2>
          <p className="reveal" data-delay="120">
            Create an account to unlock everything — three simple steps from first
            session to a brand you can put to work.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step reveal" key={s.num} data-delay={i * 100}>
              <div className="step__num">{s.num}</div>
              <h3>
                {s.title}
                <small>{s.tag}</small>
              </h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */
export function WhyUs() {
  return (
    <section className="section section--band">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">
            <span className="dot" /> Why Schools of Branding
          </span>
          <h2 className="reveal" data-delay="60">
            Built to be <span className="hl">practical</span>
          </h2>
        </div>
        <div className="whyus">
          {FEATURES.map((f, i) => (
            <div className="feature reveal" key={f.title} data-delay={(i % 4) * 80}>
              <div className="feature__icon">
                <Icon name={f.icon} size={22} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Founders / mentors ---------------- */
export function Founders() {
  return (
    <section className="section" id="mentors">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">
            <span className="dot" /> The people
          </span>
          <h2 className="reveal" data-delay="60">
            Meet your <span className="hl">mentors</span>
          </h2>
        </div>
        <div className="people">
          {FOUNDERS.map((p, i) => (
            <article className="person reveal" key={p.name} data-delay={(i % 4) * 80}>
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

/* ---------------- Formats (online / physical) ---------------- */
export function Formats() {
  return (
    <section className="section section--band">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">
            <span className="dot" /> Online &amp; in-person
          </span>
          <h2 className="reveal" data-delay="60">
            Learn <span className="hl">your way</span>
          </h2>
        </div>
        <div className="formats">
          <div className="format blue reveal">
            <div className="format__chips">
              <span className="chip">
                <Monitor size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }} />
                Live online
              </span>
              <span className="chip">Meeting links</span>
              <span className="chip">Join from anywhere</span>
            </div>
            <h3>Online sessions</h3>
            <p>
              Enrol and join live from home. Your meeting links and resources land
              in your account and inbox before every session.
            </p>
            <a href="#programmes" className="btn btn-accent btn-sm">
              See online programmes <ArrowRight size={16} />
            </a>
          </div>
          <div className="format dark reveal" data-delay="100">
            <div className="format__chips">
              <span className="chip">
                <MapPin size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }} />
                In-person
              </span>
              <span className="chip">Reserve a seat</span>
              <span className="chip">Hands-on</span>
            </div>
            <h3>Physical workshops</h3>
            <p>
              Reserve a seat at a hands-on workshop, work with materials in the
              room and get direct feedback from our mentors.
            </p>
            <a href="#programmes" className="btn btn-primary btn-sm">
              Reserve a seat <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">
            <span className="dot" /> What founders say
          </span>
          <h2 className="reveal" data-delay="60">
            Real brands, <span className="hl">real results</span>
          </h2>
        </div>
        <div className="quotes">
          {TESTIMONIALS.map((t, i) => (
            <figure className="quote reveal" key={t.name} data-delay={i * 90}>
              <div className="quote__stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="quote__by">
                <span className="quote__avatar">{t.name.charAt(0)}</span>
                <span>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing / enrolment ---------------- */
export function Pricing() {
  return (
    <section className="section section--band" id="pricing">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">
            <span className="dot" /> Ways to join
          </span>
          <h2 className="reveal" data-delay="60">
            Start where <span className="hl">you are</span>
          </h2>
          <p className="reveal" data-delay="120">
            Members unlock free first-come sessions, programme enrolment and
            physical seat reservations.
          </p>
        </div>
        <div className="plans">
          {PLANS.map((plan, i) => (
            <div
              className={`plan reveal ${plan.featured ? "featured" : ""}`}
              key={plan.name}
              data-delay={i * 90}
            >
              {plan.featured && <span className="plan__badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <div className="plan__price">
                {plan.price} <small>/ {plan.per}</small>
              </div>
              <p className="plan__desc">{plan.desc}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={18} strokeWidth={3} /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`btn ${plan.featured ? "btn-accent" : "btn-ghost"}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
