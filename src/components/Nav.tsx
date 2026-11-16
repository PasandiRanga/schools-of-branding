import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="brand" aria-label="Schools of Branding home">
          <img src="/brand/logo-transparent.png" alt="Schools of Branding" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "is-active" : "")}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="#login" className="nav__login">
            Log in
          </a>
          <a href="#signup" className="btn btn-primary btn-sm">
            Create account
          </a>
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            {l.label}
          </NavLink>
        ))}
        <a href="#login">Log in</a>
        <a href="#signup" className="btn btn-primary">
          Create account
        </a>
      </div>
    </header>
  );
}
