import { useState } from "react";
import Icon from "./Icon.jsx";
import { projects, projectCategories, whatsappLink } from "../data.js";

const categoryMeta = {
  Branding: { icon: "pen", tone: "blue" },
  Video: { icon: "video", tone: "yellow" },
  Audio: { icon: "audio", tone: "navy" },
  Content: { icon: "doc", tone: "white" },
  "Social Media": { icon: "chat", tone: "blue" },
};

export function ProjectCard({ project }) {
  const [broken, setBroken] = useState(false);
  const meta = categoryMeta[project.category] ?? categoryMeta.Branding;
  const showImage = project.image && !broken;

  const Tag = project.link ? "a" : "div";
  const linkProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag className="project" {...linkProps}>
      <div className={`project__media project__media--${meta.tone}`}>
        {showImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="project__placeholder">
            <Icon name={meta.icon} size={56} />
            <span>{project.category}</span>
          </div>
        )}
      </div>
      <div className="project__body">
        <span className="project__tag">{project.category}</span>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__text">{project.description}</p>
        {project.link && (
          <span className="project__cta">
            View project <Icon name="arrow" size={18} />
          </span>
        )}
      </div>
    </Tag>
  );
}

// A few selected projects, shown on the homepage.
export function FeaturedWork() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="work__head">
          <div>
            <p className="eyebrow">Our work</p>
            <h2 className="section-title section-title--narrow">
              A look at what we create.
            </h2>
          </div>
          <a href="#/portfolio" className="btn btn--blue btn--lg">
            View full portfolio
          </a>
        </div>
        <div className="project-grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// The dedicated portfolio page (#/portfolio).
export function PortfolioPage() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <a href="#top" className="page-hero__back">
            <span className="flip">
              <Icon name="arrow" size={18} />
            </span>
            Back to home
          </a>
          <p className="eyebrow eyebrow--yellow">Portfolio</p>
          <h1 className="page-hero__title">Our Work</h1>
          <p className="page-hero__lead">
            Examples of what we create across branding, video, audio, content,
            and social media.
          </p>
        </div>
      </section>

      <section className="section portfolio">
        <div className="container">
          <div
            className="filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                className="filter"
                aria-pressed={active === category}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {visible.length === 0 && (
            <p className="portfolio__empty">
              No projects in this category yet.
            </p>
          )}

          <div className="portfolio__cta">
            <p>Have a project in mind?</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--blue btn--lg"
            >
              Start a project
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
