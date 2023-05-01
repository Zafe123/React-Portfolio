import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Nopage from "./Nopage";
import Footer from "./Footer";


function App() {

  return (
    <div>
      <Navigation />
      <div className="page-padding">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
