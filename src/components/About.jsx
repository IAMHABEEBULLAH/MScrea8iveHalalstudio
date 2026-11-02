import { values } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__top">
        <div className="about__lead">
          <p className="eyebrow">About us</p>
          <h2 className="section-title">About MS Cre8ive Halal Studios</h2>
          <p className="about__quote">
            <span className="marker">
              Creativity should have purpose and quality should come with
              integrity.
            </span>
          </p>
        </div>

        <div className="about__copy">
          <p>
            MS Cre8ive Halal Studios is a creative studio that helps businesses,
            brands, and individuals build their presence and communicate their
            value through design and branding, video and audio production,
            content creation, and social media management.
          </p>
          <p>
            Whether you need a strong brand identity, engaging promotional
            videos, compelling content, or consistent management of your social
            media platforms, we bring the creative skills and strategic thinking
            to help you present your brand professionally and connect with your
            audience.
          </p>
          <p>
            Our work is guided by our belief that creativity should have purpose
            and quality should come with integrity. Through honesty, modesty,
            and trustworthiness, we strive to deliver creative solutions that
            align with our clients' goals and Islamic principles.
          </p>
        </div>
      </div>

      <div className="container values">
        {values.map((value) => (
          <div className="value" key={value.title}>
            <div className={`value__circle value__circle--${value.tone}`}>
              {value.title}
            </div>
            <p className="value__text">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
