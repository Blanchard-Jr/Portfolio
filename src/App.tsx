import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
