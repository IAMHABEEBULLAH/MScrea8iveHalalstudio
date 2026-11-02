import { ribbonWords } from "../data.js";

// Two identical groups so the CSS animation can loop seamlessly at -50%.
function Group() {
  const words = [...ribbonWords, ...ribbonWords];
  return (
    <div className="ribbon__group">
      {words.map((word, i) => (
        <span className="ribbon__item" key={`${word}-${i}`}>
          {word}
          <span className="ribbon__dot" />
        </span>
      ))}
    </div>
  );
}

export default function Ribbon() {
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon__band">
        <div className="ribbon__track">
          <Group />
          <Group />
        </div>
      </div>
    </div>
  );
}
