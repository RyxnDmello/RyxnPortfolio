import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
