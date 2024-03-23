import Script from "./components/Common/Script";

import Strip from "./components/Decorations/Strip";

import Cursor from "./components/Common/Cursor";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Strip />
      <Strip />

      <main>
        <About />
        <Skills />
        <Projects />
        <Pricing />
        <Contacts />
      </main>

      <Footer />

      <Cursor />
      <Script src="/Home.js" />
    </>
  );
}
