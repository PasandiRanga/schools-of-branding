type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub?: string;
  children?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, highlight, sub, children }: Props) {
  return (
    <section className="pagehead">
      <div className="container pagehead__inner">
        <span className="eyebrow reveal">
          <span className="dot" /> {eyebrow}
        </span>
        <h1 className="pagehead__title reveal" data-delay="60">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="hl">
                {highlight}
                <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M3 14 C 50 4, 150 4, 197 12"
                    fill="none"
                    stroke="var(--yellow)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </>
          )}
        </h1>
        {sub && (
          <p className="pagehead__sub reveal" data-delay="120">
            {sub}
          </p>
        )}
        {children && (
          <div className="pagehead__actions reveal" data-delay="180">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
