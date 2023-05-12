import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import ModeSwitch from "./components/modeSwitch";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = () => {
    if (language === "en") {
      setLanguage("tr");
    } else {
      setLanguage("en");
    }
  };
  return (
    <div className="App">
      <ModeSwitch
        language={language}
        handleLanguageChange={handleLanguageChange}
      />
      <Header language={language} />
      <Hero language={language} />
      <div id="skillsScroll"></div>
      <Skills language={language} />
      <Profile language={language} />
      <div id="projectsScroll"></div>
      <Projects language={language} />
      <div id="contactScroll"></div>
      <Footer language={language} />
    </div>
  );
}

export default App;
