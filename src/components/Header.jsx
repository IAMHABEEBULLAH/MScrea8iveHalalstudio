import { brand, navLinks } from "../data.js";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo">
          <img src="/logo.png" alt={brand.name} />
        </a>
        <nav className="site-header__nav" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-header__link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--blue">
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
