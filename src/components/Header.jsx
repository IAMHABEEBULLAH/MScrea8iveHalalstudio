import { useState } from "react";
import { brand, navLinks, whatsappLink } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo" onClick={close}>
          <img src="/logo.png" alt={brand.name} />
        </a>

        {/* Menu button: only visible on phones and small tablets */}
        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            aria-hidden="true"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <nav
          id="main-nav"
          className={`site-header__nav${open ? " is-open" : ""}`}
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-header__link"
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--blue"
            onClick={close}
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
