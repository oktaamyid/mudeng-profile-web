import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Event from "./components/Event";
import Divisi from "./components/Divisi";
import Benefit from "./components/Benefit";
import Karya from "./components/Karya";
import CoreTeam from "./components/CoreTeam";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Portal from "./components/Portal";
import Mascot from "./components/Mascot";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Simple Manual Routing
  const currentPath = window.location.pathname;
  if (currentPath === "/links" || currentPath === "/link") {
    return <Portal />;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <div
        className={`min-h-screen bg-white overflow-x-hidden ${isLoading ? "h-screen overflow-hidden" : ""}`}
      >
        <Navbar />
        <Hero />
        <About />
        <Benefit />
        <Divisi />
        <Karya />
        <Event />
        <CoreTeam />
        <Footer />
      </div>
      <Mascot />
    </>
  );
}

export default App;
