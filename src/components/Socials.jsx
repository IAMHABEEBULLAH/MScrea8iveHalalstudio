import Icon from "./Icon.jsx";
import { socials } from "../data.js";

// variant: "navy" (on yellow) or "blue" (on white)
export default function Socials({ variant = "blue" }) {
  return (
    <ul className={`socials socials--${variant}`}>
      {socials.map((item) => {
        const external = item.external !== false;
        return (
          <li key={item.label}>
            <a
              href={item.href}
              aria-label={item.label}
              title={item.label}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon name={item.icon} size={22} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
