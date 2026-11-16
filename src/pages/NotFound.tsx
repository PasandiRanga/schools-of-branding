import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <span className="notfound__code">404</span>
        <h1>
          This page took a <span className="hl">gap year</span>
        </h1>
        <p>
          The page you're looking for isn't here. Let's get you back to building
          your brand.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link to="/programmes" className="btn btn-ghost">
            Browse programmes
          </Link>
        </div>
      </div>
    </section>
  );
}
