/* ---------- Mont font ----------
*/
@font-face {
  font-family: "Mont";
  src: local("Mont Regular"), local("Mont-Regular"),
    url("/fonts/Mont-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Mont";
  src: local("Mont SemiBold"), local("Mont-SemiBold"),
    url("/fonts/Mont-SemiBold.woff2") format("woff2");
  font-weight: 500 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Mont";
  src: local("Mont Bold"), local("Mont-Bold"),
    url("/fonts/Mont-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Mont";
  src: local("Mont Heavy"), local("Mont-Heavy"),
    url("/fonts/Mont-Heavy.woff2") format("woff2");
  font-weight: 800 900;
  font-style: normal;
  font-display: swap;
}

/* ---------- Tokens ---------- */
:root {
  --blue: #0047c1;
  --yellow: #f5df5c;
  --navy: #00173a;
  --ink: #2b3d5c;
  --tint: #eaf1ff;
  --white: #ffffff;
  --font-display: "Mont", "Poppins", system-ui, sans-serif;
  --font-body: "Mont", "Poppins", system-ui, sans-serif;
}

/* ---------- Base ---------- */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  overflow-x: hidden;
  font-family: var(--font-body);
  color: var(--navy);
  background: var(--white);
  line-height: 1.55;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  opacity: 0.85;
}

a:focus-visible {
  outline: 3px solid var(--yellow);
  outline-offset: 3px;
}

img {
  display: block;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 104px 0;
}

.eyebrow {
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue);
}

.eyebrow--yellow {
  margin-bottom: 20px;
  color: var(--yellow);
}

.section-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(32px, 4.8vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.025em;
}

.section-title--narrow {
  max-width: 760px;
}

.highlight {
  padding: 0 0.14em;
  border-radius: 0.14em;
  background: var(--yellow);
  color: var(--navy);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.marker {
  background: linear-gradient(transparent 58%, var(--yellow) 58%);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

/* ---------- Buttons ---------- */
.btn {
  display: inline-block;
  padding: 13px 24px;
  border: 2px solid transparent;
  border-radius: 999px;
  font-weight: 700;
  text-align: center;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 1;
}

.btn--lg {
  padding: 16px 32px;
  font-size: 17px;
}

.btn--block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 28px;
  font-size: 18px;
}

.btn--blue {
  background: var(--blue);
  color: var(--white);
}

.btn--yellow {
  background: var(--yellow);
  color: var(--navy);
}

.btn--outline-white {
  border-color: var(--white);
  color: var(--white);
  font-weight: 500;
}

.btn--outline-navy {
  border-color: var(--navy);
  background: var(--white);
  color: var(--navy);
}

/* ---------- Header ---------- */
.site-header {
  background: var(--white);
}

.site-header__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 32px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.site-header__logo img {
  height: 48px;
  width: auto;
}

.site-header__nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 28px;
  font-weight: 500;
}

.site-header__link {
  padding: 12px 0;
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  overflow: hidden;
  background: var(--blue);
  color: var(--white);
}

.hero__eight {
  position: absolute;
  right: -24px;
  top: 8px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(300px, 42vw, 600px);
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 3px var(--yellow);
  opacity: 0.4;
  pointer-events: none;
  user-select: none;
}

.hero__rings {
  position: absolute;
  left: -120px;
  bottom: -140px;
  width: 420px;
  height: 420px;
  opacity: 0.18;
}

.hero__inner {
  position: relative;
  padding-top: 88px;
  padding-bottom: 168px;
}

.hero__badge {
  display: inline-block;
  margin-bottom: 28px;
  padding: 8px 18px;
  border-radius: 999px;
  background: var(--yellow);
  color: var(--navy);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transform: rotate(-2deg);
}

.hero__title {
  max-width: 900px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(38px, 6.4vw, 80px);
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.hero__lead {
  max-width: 600px;
  margin-top: 32px;
  font-size: 20px;
  color: #e3ecff;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 44px;
}

/* ---------- Ribbon ---------- */
.ribbon {
  position: relative;
  z-index: 2;
  margin-top: -64px;
  padding: 28px 0 8px;
  overflow: hidden;
}

.ribbon__band {
  margin-left: -4%;
  width: 108%;
  padding: 20px 0;
  overflow: hidden;
  background: var(--yellow);
  color: var(--navy);
  box-shadow: 0 10px 0 var(--blue);
  transform: rotate(-2deg);
}

.ribbon__track {
  display: flex;
  width: max-content;
  animation: ribbon-scroll 28s linear infinite;
  will-change: transform;
}

.ribbon__group {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 32px;
  padding-right: 32px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 28px;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.ribbon__item {
  display: flex;
  align-items: center;
  gap: 32px;
}

.ribbon__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--blue);
}

/* Moves left to right, forever. Starts half-way back so the loop is seamless. */
@keyframes ribbon-scroll {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.btn--whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

/* ---------- Services ---------- */
.services {
  padding-top: 88px;
}

.services__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 64px;
}

.service-card {
  flex: 1 1 250px;
  padding: 32px;
  border: 2px solid transparent;
  border-radius: 28px;
  transition: transform 0.25s ease;
}

.service-card:nth-child(1) {
  transform: rotate(-1.5deg);
}
.service-card:nth-child(2) {
  transform: rotate(1deg);
}
.service-card:nth-child(3) {
  transform: rotate(-1deg);
}
.service-card:nth-child(4) {
  transform: rotate(1.5deg);
}

.service-card:hover {
  transform: rotate(0deg) translateY(-8px);
}

.service-card__num {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 56px;
  line-height: 1;
}

.service-card__icon {
  margin-top: 28px;
}

.service-card__title {
  margin: 16px 0 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 26px;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.service-card--blue {
  background: var(--blue);
  color: var(--white);
}
.service-card--blue .service-card__num {
  color: var(--yellow);
}
.service-card--blue .service-card__text {
  color: #e3ecff;
}

.service-card--yellow {
  background: var(--yellow);
  color: var(--navy);
}
.service-card--yellow .service-card__num {
  color: var(--blue);
}
.service-card--yellow .service-card__text {
  color: #2a2a10;
}

.service-card--white {
  border-color: var(--blue);
  background: var(--white);
  color: var(--navy);
}
.service-card--white .service-card__num,
.service-card--white .service-card__icon {
  color: var(--blue);
}
.service-card--white .service-card__text {
  color: var(--ink);
}

.service-card--navy {
  background: var(--navy);
  color: var(--white);
}
.service-card--navy .service-card__num {
  color: var(--yellow);
}
.service-card--navy .service-card__text {
  color: #d6e2fa;
}

/* ---------- About ---------- */
.about {
  background: var(--tint);
}

.about__top {
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
}

.about__lead {
  flex: 1 1 380px;
  min-width: 0;
}

.about__quote {
  margin-top: 40px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 28px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--blue);
}

.about__copy {
  flex: 1 1 420px;
  min-width: 0;
  font-size: 18px;
  color: var(--ink);
}

.about__copy p + p {
  margin-top: 22px;
}

.values {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px 40px;
  margin-top: 80px;
}

.value {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  text-align: center;
}

.value__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 30px;
  letter-spacing: -0.01em;
  transition: transform 0.25s ease;
}

.value:hover .value__circle {
  transform: scale(1.05);
}

.value__circle--blue {
  background: var(--blue);
  color: var(--white);
}

.value__circle--yellow {
  background: var(--yellow);
  color: var(--navy);
}

.value__circle--white {
  border: 8px solid var(--blue);
  background: var(--white);
  color: var(--navy);
  font-size: 21px;
}

.value__text {
  margin-top: 20px;
  color: var(--ink);
}

/* ---------- Aim ---------- */
.aim {
  position: relative;
  overflow: hidden;
  padding: 112px 0;
  background: var(--blue);
  color: var(--white);
}

.aim__rings {
  position: absolute;
  right: -140px;
  top: -120px;
  width: 520px;
  height: 520px;
  opacity: 0.2;
}

.aim__inner {
  position: relative;
}

.aim__statement {
  max-width: 980px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(26px, 3.8vw, 46px);
  line-height: 1.16;
  letter-spacing: -0.02em;
}

.aim__accent {
  color: var(--yellow);
}

.aim__support {
  max-width: 760px;
  margin-top: 36px;
  font-size: 20px;
  color: #e3ecff;
}

/* ---------- Contact ---------- */
.contact {
  padding: 104px 0;
  background: var(--yellow);
  color: var(--navy);
}

.contact__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.contact__copy {
  flex: 1 1 460px;
  min-width: 0;
}

.contact__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(34px, 5.2vw, 64px);
  line-height: 1.03;
  letter-spacing: -0.03em;
}

.contact__text {
  max-width: 540px;
  margin-top: 22px;
  font-size: 19px;
  color: #2a2a10;
}

.contact__actions {
  display: flex;
  flex: 0 1 380px;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
}

.contact__location {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  font-size: 18px;
  font-weight: 700;
}

/* ---------- Footer ---------- */
.site-footer__meta {
  flex: 1 1 240px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
}

.site-footer {
  padding: 36px 0;
  background: var(--white);
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px 32px;
}

.site-footer img {
  height: 52px;
  width: auto;
}

.site-footer p {
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
}

/* ---------- Motion preferences ---------- */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .btn,
  .service-card,
  .value__circle {
    transition: none;
  }
}

/* ---------- Small screens ---------- */
@media (max-width: 640px) {
  .section {
    padding: 72px 0;
  }
  .hero__inner {
    padding-top: 56px;
    padding-bottom: 140px;
  }
  .hero__eight {
    opacity: 0.22;
  }
  .ribbon__group {
    font-size: 22px;
  }
}

/* ---------- Mobile polish ---------- */
@media (max-width: 768px) {
  .container { padding: 0 16px; }
  .section { padding: 64px 0; }

  .site-header__logo img { height: 40px; }
  .site-header__nav {
    width: 100%;
    justify-content: space-between;
    gap: 0 12px;
    font-size: 15px;
  }
  .site-header__nav .btn { padding: 11px 18px; }

  .hero__inner { padding-top: 48px; padding-bottom: 132px; }
  .hero__title { font-size: clamp(32px, 9.4vw, 52px); }
  .hero__lead { font-size: 18px; margin-top: 24px; }
  .hero__actions { flex-direction: column; gap: 12px; margin-top: 32px; }
  .hero__actions .btn { width: 100%; }
  .hero__eight { font-size: 280px; right: -40px; opacity: 0.2; }

  .ribbon { margin-top: -52px; }
  .ribbon__group { font-size: 20px; gap: 22px; }
  .ribbon__item { gap: 22px; }

  .services { padding-top: 64px; }
  .services__grid { gap: 20px; margin-top: 40px; }
  .service-card { flex-basis: 100%; padding: 26px; }
  .service-card:nth-child(n) { transform: none; }
  .service-card__num { font-size: 44px; }
  .service-card__title { font-size: 24px; }

  .about__top { gap: 32px; }
  .about__quote { font-size: 22px; margin-top: 28px; }
  .about__copy { font-size: 17px; }
  .values { margin-top: 56px; gap: 36px 20px; }
  .value { width: 100%; max-width: 280px; }
  .value__circle { width: 180px; height: 180px; font-size: 24px; }
  .value__circle--white { font-size: 17px; }

  .aim { padding: 72px 0; }
  .aim__support { font-size: 18px; margin-top: 24px; }
  .aim__rings { width: 340px; height: 340px; right: -120px; top: -90px; }

  .contact { padding: 72px 0; }
  .contact__inner { gap: 28px; }
  .contact__copy,
  .contact__actions { flex-basis: 100%; }
  .btn--block { padding: 16px 20px; font-size: 16px; overflow-wrap: anywhere; }

  .site-footer__inner { flex-direction: column; align-items: flex-start; }
  .site-footer__meta { text-align: left; }
}

@media (max-width: 380px) {
  .site-nav { font-size: 14px; }
  .site-header__nav { font-size: 14px; }
  .site-header__nav .btn { padding: 10px 14px; }
  .hero__badge { font-size: 12px; }
}

/* ---------- Social icons ---------- */
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: var(--white);
  transition: transform 0.15s ease;
}

.socials a:hover {
  opacity: 1;
  transform: translateY(-3px);
}

.socials--navy a {
  background: var(--navy);
}

.socials--blue a {
  background: var(--blue);
}

.contact__follow {
  margin-top: 8px;
}

.contact__follow-label {
  margin-bottom: 12px;
  font-weight: 700;
}

/* ---------- Portfolio ---------- */
.work {
  background: var(--tint);
}

.work__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 28px;
  margin-top: 48px;
}

.project {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #cfdcf5;
  border-radius: 24px;
  background: var(--white);
  color: var(--navy);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

a.project:hover,
.project:hover {
  opacity: 1;
  transform: translateY(-6px);
  box-shadow: 0 14px 0 -6px var(--yellow);
}

.project__media {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.project__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project__placeholder {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project__media--blue {
  background: var(--blue);
  color: var(--white);
}
.project__media--yellow {
  background: var(--yellow);
  color: var(--navy);
}
.project__media--navy {
  background: var(--navy);
  color: var(--yellow);
}
.project__media--white {
  background: var(--tint);
  color: var(--blue);
}

.project__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 24px;
}

.project__tag {
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--yellow);
  font-size: 13px;
  font-weight: 700;
}

.project__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  line-height: 1.2;
}

.project__text {
  color: var(--ink);
}

.project__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 6px;
  font-weight: 700;
  color: var(--blue);
}

.page-hero {
  padding: 56px 0 72px;
  background: var(--blue);
  color: var(--white);
}

.page-hero__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  margin-bottom: 32px;
  font-weight: 700;
  color: var(--yellow);
}

.flip {
  display: inline-flex;
  transform: rotate(180deg);
}

.page-hero__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(40px, 7vw, 76px);
  line-height: 1.04;
  letter-spacing: -0.03em;
}

.page-hero__lead {
  max-width: 620px;
  margin-top: 20px;
  font-size: 20px;
  color: #e3ecff;
}

.portfolio {
  padding-top: 64px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter {
  min-height: 44px;
  padding: 10px 22px;
  border: 2px solid var(--blue);
  border-radius: 999px;
  background: var(--white);
  color: var(--blue);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.filter[aria-pressed="true"] {
  background: var(--blue);
  color: var(--white);
}

.filter:focus-visible {
  outline: 3px solid var(--yellow);
  outline-offset: 3px;
}

.portfolio__empty {
  margin-top: 40px;
  font-size: 18px;
  color: var(--ink);
}

.portfolio__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 72px;
  padding: 32px;
  border-radius: 24px;
  background: var(--tint);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 24px;
}

@media (max-width: 768px) {
  .work__head .btn { width: 100%; }
  .project-grid { margin-top: 32px; gap: 20px; }
  .page-hero { padding: 36px 0 56px; }
  .portfolio { padding-top: 48px; }
  .portfolio__cta { padding: 24px; margin-top: 48px; font-size: 20px; }
  .portfolio__cta .btn { width: 100%; }
  .socials a { width: 46px; height: 46px; }
}

/* ---------- Mobile menu ---------- */
.site-header__toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 2px solid var(--blue);
  border-radius: 14px;
  background: var(--white);
  color: var(--blue);
  cursor: pointer;
}

.site-header__toggle:focus-visible {
  outline: 3px solid var(--yellow);
  outline-offset: 3px;
}

@media (max-width: 860px) {
  .site-header__inner {
    flex-wrap: wrap;
    gap: 0 16px;
  }

  .site-header__toggle {
    display: flex;
  }

  .site-header__nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0;
    padding: 8px 0 20px;
    font-size: 17px;
  }

  .site-header__nav.is-open {
    display: flex;
  }

  .site-header__link {
    padding: 15px 4px;
    border-bottom: 1px solid #dbe6fb;
  }

  .site-header__nav .btn {
    margin-top: 18px;
    padding: 16px 24px;
    font-size: 17px;
  }

  /* Highlighted headline words were overlapping the line above */
  .hero__title {
    line-height: 1.2;
  }
}
