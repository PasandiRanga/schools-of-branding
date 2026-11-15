import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/brand/logo-white.png" alt="Schools of Branding" />
            <p>
              Practical workshops and programmes in branding, marketing, content
              creation, social media and packaging design — for budding
              entrepreneurs ready to start.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <h4>Account</h4>
            <a href="#signup">Create account</a>
            <a href="#login">Log in</a>
            <a href="#pricing">Enrol</a>
            <a href="#programmes">Free sessions</a>
          </div>

          <div className="footer__col">
            <h4>Get in touch</h4>
            <a href="mailto:hello@schoolsofbranding.com">hello@schoolsofbranding.com</a>
            <a href="#contact">Workshops &amp; events</a>
            <a href="#contact">Partner with us</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Schools of Branding. All rights reserved.</span>
          <span>Built for founders, by founders.</span>
        </div>
      </div>
    </footer>
  );
}
