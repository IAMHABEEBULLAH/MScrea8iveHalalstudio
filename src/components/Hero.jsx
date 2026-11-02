import Rings from "./Rings.jsx";
import { whatsappLink } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__eight" aria-hidden="true">
        8
      </div>
      <Rings className="hero__rings" />

      <div className="container hero__inner">
        <p className="hero__badge">Halal Studios</p>
        <h1 className="hero__title">
          Creative Solutions. Guided by{" "}
          <span className="highlight">Islamic Principles.</span>
        </h1>
        <p className="hero__lead">
          From branding and design to content creation and social media
          management, MS Cre8ive helps you communicate your value through
          creative solutions guided by Islamic principles.
        </p>
        <div className="hero__actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--yellow btn--lg"
          >
            Start a project
          </a>
          <a href="#/portfolio" className="btn btn--outline-white btn--lg">
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
