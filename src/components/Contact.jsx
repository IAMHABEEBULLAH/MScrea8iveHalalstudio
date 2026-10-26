import Icon from "./Icon.jsx";
import { contact } from "../data.js";

export default function Contact() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__copy">
          <h2 className="contact__title">Ready to bring your idea to life?</h2>
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
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--blue btn--block"
          >
            <Icon name="whatsapp" size={24} />
            Chat on WhatsApp
          </a>

          {contact.instagram && (
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-navy btn--block"
            >
              <Icon name="instagram" size={24} />
              Follow on Instagram
            </a>
          )}

          {contact.facebook && (
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-navy btn--block"
            >
              <Icon name="facebook" size={24} />
              Visit our Facebook page
            </a>
          )}

          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="btn btn--outline-navy btn--block"
            >
              <Icon name="mail" size={24} />
              {contact.email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
