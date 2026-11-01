import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Ribbon from "./components/Ribbon.jsx";
import Services from "./components/Services.jsx";
import { FeaturedWork, PortfolioPage } from "./components/Portfolio.jsx";
import About from "./components/About.jsx";
import Aim from "./components/Aim.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const onPortfolioRoute = (hash) => hash.startsWith("#/portfolio");

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  const portfolio = onPortfolioRoute(hash);

  // After the page switches, scroll to the right place.
  useEffect(() => {
    document.title = portfolio
      ? "Our Work | MS Cre8ive Halal Studios"
      : "MS Cre8ive Halal Studios";

    const id = portfolio ? "" : hash.replace("#", "");
    const target = id ? document.getElementById(id) : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [portfolio, hash]);

  return (
    <>
      <Header />
      <main>
        {portfolio ? (
          <PortfolioPage />
        ) : (
          <>
            <Hero />
            <Ribbon />
            <Services />
            <FeaturedWork />
            <About />
            <Aim />
          </>
        )}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
