import { HERO_PHOTOS } from "../data/content";

export default function Hero() {
  return (
    <section className="hero container">
      <span className="eyebrow reveal">
        <span className="dot" /> Workshops &amp; programmes · online &amp; in-person
      </span>

      <h1 className="hero__title reveal" data-delay="60">
        Learn to build{" "}
        <span className="hl">
          brands
          <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M3 14 C 50 4, 150 4, 197 12"
              fill="none"
              stroke="var(--yellow)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </span>{" "}
        that people remember
      </h1>

      <p className="hero__sub reveal" data-delay="120">
        Practical, hands-on training in branding, marketing, content creation,
        social media and packaging design — built for budding entrepreneurs ready
        to start.
      </p>

      <div className="hero__cta reveal" data-delay="180">
        <a href="#signup" className="btn btn-primary">
          Join a free session
        </a>
        <a href="#programmes" className="btn btn-ghost">
          Browse programmes
        </a>
      </div>

      <div className="hero__gallery reveal" data-delay="240">
        <svg
          className="hero__ticker"
          viewBox="0 0 910 300"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <path
              id="hero-ticker-path"
              d="M18 150 Q127 272 237 150 Q346 28 455 150 Q564 272 673 150 Q782 28 892 150"
            />
          </defs>
          <use href="#hero-ticker-path" fill="none" stroke="var(--sage-green)" strokeWidth="30" strokeLinecap="round" />
          <text
            fill="var(--paper)"
            fontSize="18"
            fontWeight="600"
            letterSpacing="1"
            textAnchor="start"
            dominantBaseline="middle"
          >
            <textPath href="#hero-ticker-path" startOffset="0%">
              Brand Strategy · Marketing Foundations · Content Creation · Social Media · Packaging Design · Hands-on Workshops · Online &amp; In-person ·
              Brand Strategy · Marketing Foundations · Content Creation · Social Media · Packaging Design · Hands-on Workshops · Online &amp; In-person ·
              Brand Strategy · Marketing Foundations · Content Creation · Social Media · Packaging Design · Hands-on Workshops · Online &amp; In-person ·
              <animate
                attributeName="startOffset"
                from="0%"
                to="-100%"
                dur="10s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
        <div className="hero__side hero__side--left">
          <div className="hero__photo hero__photo--side">
            <img src={HERO_PHOTOS[0]} alt="" loading="lazy" />
          </div>
          <div
            className="hero__decor hero__decor--left"
            aria-hidden="true"
            style={{ aspectRatio: "1.08108 / 1" }}
          >
            <img
              src="https://framerusercontent.com/images/aA8bUrKmf4GfJNsY0xEjF5I75gs.svg?width=80&height=74"
              alt=""
              width="80"
              height="74"
            />
          </div>
        </div>
        <div className="hero__photo hero__photo--center">
          <img src={HERO_PHOTOS[1]} alt="" loading="lazy" />
        </div>
        <div className="hero__side hero__side--right">
          <div className="hero__photo hero__photo--side">
            <img src={HERO_PHOTOS[2]} alt="" loading="lazy" />
          </div>
          <div
            className="hero__decor hero__decor--right"
            aria-hidden="true"
            style={{ aspectRatio: "1 / 1", transform: "rotate(4deg)" }}
          >
            <img
              src="https://framerusercontent.com/images/AfZGN6DSouiNYotVm1vb4TQpbl8.svg?width=80&height=80"
              alt=""
              width="80"
              height="80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
