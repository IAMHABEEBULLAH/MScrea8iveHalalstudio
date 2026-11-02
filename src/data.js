// Everything you are likely to edit lives here.

export const brand = {
  name: "MS Cre8ive Halal Studios",
  tagline: "Creative Solutions. Guided by Islamic Principles.",
};

export const contact = {
  // Digits only, with country code (no + or spaces).
  whatsapp: "2349112613696",
  // Opens pre-typed in the visitor's WhatsApp chat.
  whatsappMessage:
    "As Salām Alaikum WarahmatuLlahi Wabarakatuhu.\n\nI'd love to learn more about the creative services offered by MS Cre8ive Halal Studios and how they can meet my needs.",
  email: "mscre8ivehs@gmail.com",
  location: "Ilorin, Kwara State, Nigeria",
};

// One link used by every "Start a project" and "Chat on WhatsApp" button.
export const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`;

// Official platforms, shown in the contact section and the footer.
export const socials = [
  { label: "WhatsApp", icon: "whatsapp", href: whatsappLink },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/mscre8ive" },
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/share/1FMpJ1JhH4/" },
  { label: "X", icon: "x", href: "https://x.com/mscre8ive01" },
  { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@ms.cre8ive" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/ms-cre8ive/" },
  { label: "Email", icon: "mail", href: `mailto:${contact.email}`, external: false },
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#/portfolio" },
  { label: "About", href: "#about" },
  { label: "Our Aim", href: "#aim" },
];

export const ribbonWords = [
  "Design",
  "Branding",
  "Video",
  "Audio",
  "Content",
  "Social Media",
];

export const services = [
  {
    title: "Design & Branding",
    text: "A strong brand identity that presents your business professionally and makes it memorable.",
    icon: "pen",
    tone: "blue",
  },
  {
    title: "Video & Audio Production",
    text: "Engaging promotional videos and audio that carry your message clearly to your audience.",
    icon: "video",
    tone: "yellow",
  },
  {
    title: "Content Creation",
    text: "Compelling content that communicates your value and connects you with the right people.",
    icon: "doc",
    tone: "white",
  },
  {
    title: "Social Media Management",
    text: "Consistent management of your social media platforms, so your brand shows up with care.",
    icon: "chat",
    tone: "navy",
  },
];

export const values = [
  {
    title: "Honesty",
    text: "Straightforward work and clear communication, from first conversation to final delivery.",
    tone: "blue",
  },
  {
    title: "Modesty",
    text: "Design and content that stay dignified, thoughtful, and true to your message.",
    tone: "yellow",
  },
  {
    title: "Trustworthiness",
    text: "Quality you can rely on, delivered with integrity and aligned with your goals.",
    tone: "white",
  },
];

// ---------------------------------------------------------------------------
// PORTFOLIO
// These six are PLACEHOLDERS. Replace each one with a real project:
//   title       the project or client name
//   category    one of: Branding, Video, Audio, Content, Social Media
//   description one short line about the work
//   image       a picture of the work. Put the file in public/portfolio/ and
//               write its path, e.g. "/portfolio/brand-01.jpg"
//               (leave "" to show a coloured tile instead)
//   link        optional: a video, reel or post. When set, the card opens it.
//   featured    true = also shown on the homepage (keep to 3 or 6)
// To add a project, copy one block. To remove one, delete its block.
// ---------------------------------------------------------------------------
export const projectCategories = [
  "All",
  "Branding",
  "Video",
  "Audio",
  "Content",
  "Social Media",
];

export const projects = [
  {
    id: "project-1",
    title: "[PROJECT NAME]",
    category: "Branding",
    description: "[One line about this brand identity project]",
    image: "",
    link: "",
    featured: true,
  },
  {
    id: "project-2",
    title: "[PROJECT NAME]",
    category: "Video",
    description: "[One line about this promotional video]",
    image: "",
    link: "",
    featured: true,
  },
  {
    id: "project-3",
    title: "[PROJECT NAME]",
    category: "Social Media",
    description: "[One line about this social media account you manage]",
    image: "",
    link: "",
    featured: true,
  },
  {
    id: "project-4",
    title: "[PROJECT NAME]",
    category: "Branding",
    description: "[One line about this logo or design project]",
    image: "",
    link: "",
    featured: false,
  },
  {
    id: "project-5",
    title: "[PROJECT NAME]",
    category: "Audio",
    description: "[One line about this audio production]",
    image: "",
    link: "",
    featured: false,
  },
  {
    id: "project-6",
    title: "[PROJECT NAME]",
    category: "Content",
    description: "[One line about this content piece]",
    image: "",
    link: "",
    featured: false,
  },
];
