import Cursor from "@components/Common/Cursor";

import Header from "@components/Header";
import Strip from "@components/Strip";
import About from "@components/About";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Pricing from "@components/Pricing";
import Contacts from "@components/Contacts";
import Footer from "@components/Footer";
import Progress from "@components/Animations/Progress";

export default function App() {
  return (
    <>
      <Progress />
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
    </>
  );
}
