import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Ribbon from "./components/Ribbon.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Aim from "./components/Aim.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ribbon />
        <Services />
        <About />
        <Aim />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
