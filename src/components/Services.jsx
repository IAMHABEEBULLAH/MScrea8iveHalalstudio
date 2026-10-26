import Icon from "./Icon.jsx";
import { services } from "../data.js";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="eyebrow">What we do</p>
        <h2 className="section-title section-title--narrow">
          Everything your brand needs to be seen and understood.
        </h2>

        <div className="services__grid">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`service-card service-card--${service.tone}`}
            >
              <p className="service-card__num">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="service-card__icon">
                <Icon name={service.icon} />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
