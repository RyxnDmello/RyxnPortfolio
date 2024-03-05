import Script from "./components/Common/Script";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Cursor from "./components/Common/Cursor";

export default function App() {
  return (
    <>
      <Header />

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
