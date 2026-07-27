import { useEffect, useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);


    return () => clearTimeout(timer);

  }, []);



  if (loading) {
    return <LoadingScreen />;
  }



  return (

    <main
      className="
        min-h-screen
        bg-[#FAFAF8]
        text-[#111827]
        overflow-x-hidden
        selection:bg-[#DCE6FF]
        selection:text-[#111827]
      "
    >

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <FeaturedProject />

      <Projects />

      <Contact />

      <Footer />

    </main>

  );
}


export default App;