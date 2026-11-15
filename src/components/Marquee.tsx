import { MARQUEE } from "../data/content";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((label, i) => (
          <span className="marquee__item" key={i}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
