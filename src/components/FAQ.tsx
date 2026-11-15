import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">
            <span className="dot" /> FAQ
          </span>
          <h2 className="reveal" data-delay="60">
            No stress, <span className="hl">no surprises</span>
          </h2>
        </div>

        <div className="faq">
          {FAQS.map((item, i) => (
            <FaqRow
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className={`faq-item reveal ${isOpen ? "open" : ""}`}>
      <button className="faq-item__q" onClick={onToggle} aria-expanded={isOpen}>
        {q}
        <Plus size={22} />
      </button>
      <div
        className="faq-item__a"
        ref={ref}
        style={{ maxHeight: isOpen ? ref.current?.scrollHeight ?? 400 : 0 }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}
