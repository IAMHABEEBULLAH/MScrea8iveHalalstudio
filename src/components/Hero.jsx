import Rings from "./Rings.jsx";

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
          We help businesses, brands, and individuals bring their ideas to life
          through design, video, audio, content, and social media, with honesty,
          modesty, and trustworthiness.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--yellow btn--lg">
            Start a project
          </a>
          <a href="#services" className="btn btn--outline-white btn--lg">
            See what we do
          </a>
        </div>
      </div>
    </section>
  );
}
