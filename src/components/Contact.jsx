import Icon from "./Icon.jsx";
import Socials from "./Socials.jsx";
import { contact, whatsappLink } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__copy">
          <h2 className="contact__title">
            Let Us Help You Create Something Meaningful.
          </h2>
          <p className="contact__text">
            Tell us about your brand and what you need. We will help you present
            it professionally and reach the right audience.
          </p>
          <p className="contact__location">
            <Icon name="pin" size={22} />
            <span>{contact.location}</span>
          </p>
        </div>

        <div className="contact__actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--blue btn--block"
          >
            <Icon name="whatsapp" size={24} />
            Chat on WhatsApp
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="btn btn--outline-navy btn--block"
          >
            <Icon name="mail" size={24} />
            {contact.email}
          </a>

          <div className="contact__follow">
            <p className="contact__follow-label">Follow us</p>
            <Socials variant="navy" />
          </div>
        </div>
      </div>
    </section>
  );
}
