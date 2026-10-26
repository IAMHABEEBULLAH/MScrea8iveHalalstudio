import { brand, contact } from "../data.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <img src="/logo.png" alt={brand.name} />
        <div className="site-footer__meta">
          <p>{brand.tagline}</p>
          <p>{contact.location}</p>
        </div>
      </div>
    </footer>
  );
}
