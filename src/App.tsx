import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Event from "./components/Event";
import Divisi from "./components/Divisi";
import Benefit from "./components/Benefit";
import Karya from "./components/Karya";
import CoreTeam from "./components/CoreTeam";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Event />
      <Benefit />
      <Divisi />
      <Karya />
      <CoreTeam />
      <Footer />
    </div>
  );
}

export default App;
