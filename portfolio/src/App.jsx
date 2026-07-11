import { useEffect, useState } from "react";
import useLenis from "./hooks/useLenis";
import { ThemeProvider } from "./context/ThemeContext";

import Aurora from "./components/background/Aurora";
import MouseGlow from "./components/background/MouseGlow";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import PageTransition from "./components/layout/PageTransition";
import ScrollToTop from "./components/layout/ScrollToTop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Credentials from "./sections/Credentials";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Loader show={loading} />
      <Aurora />
      <MouseGlow />
      <Navbar />

      <PageTransition>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </PageTransition>

      <ScrollToTop />
    </ThemeProvider>
  );
}
