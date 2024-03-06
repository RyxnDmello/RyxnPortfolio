import Script from "./components/Common/Script";

import Strip from "./components/decorations/Strip";

import Cursor from "./components/Common/Cursor";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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
      </main>

      <Cursor />

      <Script src="/Cursor.js" />
    </>
  );
}
