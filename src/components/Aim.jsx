import Rings from "./Rings.jsx";

export default function Aim() {
  return (
    <section id="aim" className="aim">
      <Rings color="#F5DF5C" className="aim__rings" />
      <div className="container aim__inner">
        <p className="eyebrow eyebrow--yellow">Our aim</p>
        <p className="aim__statement">
          To help businesses, brands, and individuals bring their ideas to life
          through{" "}
          <span className="aim__accent">
            creative design, branding, video and audio production, content
            creation, and social media management.
          </span>
        </p>
        <p className="aim__support">
          We aim to provide quality creative solutions that help our clients
          build their brands, communicate effectively, and connect with the
          right audience, guided by Islamic principles.
        </p>
      </div>
    </section>
  );
}
