# MS Cre8ive Halal Studios: Website

The official website for **MS Cre8ive Halal Studios**, a creative studio in Ilorin, Kwara State, Nigeria offering design and branding, video and audio production, content creation, and social media management.

*Creative Solutions. Guided by Islamic Principles.*

Built with **React 18** and **Vite**. It is a static site: no server or database needed.

---

## What is on the site

- **Home page:** hero, moving services ribbon, services, featured work, about, our aim, and contact.
- **Portfolio page** (`/#/portfolio`): all projects, with category filters.
- **Buttons:** every "Start a project" and "Chat on WhatsApp" button opens WhatsApp with a ready-typed greeting message.
- **Social links:** WhatsApp, Instagram, Facebook, X, TikTok, LinkedIn and email.
- **Mobile friendly:** a menu button on phones and layouts that adapt to every screen size.

---

## Getting started

You need [Node.js](https://nodejs.org) version 18 or newer.

```bash
npm install      # run once, downloads what the site needs
npm run dev      # starts the site locally (usually http://localhost:5173)
```

Other commands:

```bash
npm run build    # creates the finished site in the dist/ folder
npm run preview  # previews the finished site locally
```

---

## Project structure

```
├── index.html               Page shell and font loading
├── public/
│   ├── logo.png             Studio logo (header and footer)
│   ├── fonts/               Put the Mont font files here (see "Font")
│   └── portfolio/           Put your project images here
└── src/
    ├── data.js              ✏️  Most things you will edit are here
    ├── styles.css           All styling and colours
    ├── App.jsx              Page switching (home / portfolio)
    ├── main.jsx             App entry point
    └── components/
        ├── Header.jsx       Top bar and mobile menu
        ├── Hero.jsx         Top banner
        ├── Ribbon.jsx       Moving yellow strip
        ├── Services.jsx     Services cards
        ├── Portfolio.jsx    Featured work and the portfolio page
        ├── About.jsx        About text and values
        ├── Aim.jsx          Our aim
        ├── Contact.jsx      Contact section
        ├── Socials.jsx      Social media icons
        ├── Footer.jsx       Footer
        ├── Icon.jsx         All icons
        └── Rings.jsx        Decorative circles
```

---

## How to edit things

Almost everything you will want to change is in **`src/data.js`**.

### Contact details and social links

Open `src/data.js` and edit the `contact` and `socials` sections:

- `whatsapp`: the number, digits only with country code (currently `2349112613696`).
- `whatsappMessage`: the greeting that appears ready-typed in WhatsApp.
- `email` and `location`.
- `socials`: the link for each platform.

Every WhatsApp button on the site uses the same link, so changing it here changes it everywhere.

### Portfolio projects

Projects are listed in `src/data.js` under `projects`. The ones in the file now are **placeholders** (`[PROJECT NAME]`). Replace each with a real project:

```js
{
  id: "project-1",
  title: "Client or project name",
  category: "Branding",        // Branding, Video, Audio, Content or Social Media
  description: "One short line about the work.",
  image: "/portfolio/brand-01.jpg",   // file inside public/portfolio/
  link: "",                    // optional: video, reel or post link
  featured: true,              // true = also shown on the home page
}
```

- **Add a project:** copy a block and change it.
- **Remove a project:** delete its block.
- **Images:** put the file in `public/portfolio/` and write its path as above. If `image` is empty, a coloured tile is shown instead.
- **Link:** when set, clicking the card opens it in a new tab.
- Keep **3 or 6** projects marked `featured: true` so the home page grid looks even.

### Services, values and menu

Also in `src/data.js`: `services`, `values`, `navLinks`, and `ribbonWords` (the words in the moving strip).

### Page text

The hero, about, aim and contact wording is in the matching file in `src/components/`.

### Colours

At the top of `src/styles.css`:

```css
--blue:   #0047c1;
--yellow: #f5df5c;
--navy:   #00173a;
```

Change these and the whole site updates.

### Logo

Replace `public/logo.png` with a new file of the same name.

---

## Font

The site is set to use **Mont**, with **Poppins** as the backup.

Mont is a paid font, so its files are **not included**. Until you add them, the site shows Poppins (loaded from Google Fonts).

To use Mont, put your licensed files in `public/fonts/` with these exact names:

```
Mont-Regular.woff2
Mont-SemiBold.woff2
Mont-Bold.woff2
Mont-Heavy.woff2
```

The site then uses Mont automatically. No code changes needed.

---

## Deploying

Run `npm run build`, then publish the **`dist`** folder to any static host.

| Host | Settings |
| --- | --- |
| **Netlify** | Build command `npm run build`, publish directory `dist` |
| **Vercel** | Detects Vite automatically |
| **Cloudflare Pages** | Build command `npm run build`, output directory `dist` |
| **GitHub Pages** | Upload the contents of `dist` |

The portfolio page uses an address like `/#/portfolio`, so it works on any static host with no extra setup.

---

## Troubleshooting

- **Build fails with "Could not resolve":** a file name does not match its import. File names are **case-sensitive** on Netlify and Vercel, so `Portfolio.jsx` and `portfolio.jsx` are different files. Check the spelling and capital letters in `src/components/`.
- **Images do not show:** check the path in `data.js` matches the file in `public/portfolio/` exactly, including capital letters and the extension.
- **Font still looks like Poppins:** the Mont files are missing or named differently. See the Font section.
- **Changes do not appear:** stop `npm run dev` (Ctrl + C), run it again, and refresh the browser.

---

## Contact

**MS Cre8ive Halal Studios**
Ilorin, Kwara State, Nigeria
WhatsApp: +234 911 261 3696
Email: mscre8ivehs@gmail.com
Instagram: [@mscre8ive](https://www.instagram.com/mscre8ive)
