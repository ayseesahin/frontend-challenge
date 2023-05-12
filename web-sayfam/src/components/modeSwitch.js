import { useState, useEffect } from "react";

export default function ModeSwitch({ language, handleLanguageChange }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark-mode", darkMode);
    const footer = document.querySelector(".footer_Container");
    footer.classList.toggle("dark-mode", darkMode);
    const text = document.querySelector(".lineAndName");
    text.classList.toggle("dark-mode", darkMode);
    const textheading = document.querySelector(".heading");
    textheading.classList.toggle("dark-mode", darkMode);
    const introText = document.querySelector(".intro");
    introText.classList.toggle("dark-mode", darkMode);

    const personalText = document.querySelector(".links-footer p");
    personalText.classList.toggle("dark-mode", darkMode);
    const skillheadingText = document.querySelector(".heading-list");
    skillheadingText.classList.toggle("dark-mode", darkMode);
    const mailText = document.querySelector(".mail");
    mailText.classList.toggle("dark-mode", darkMode);
    const logoBg = document.querySelector(".logo");
    logoBg.classList.toggle("dark-mode", darkMode);
    const modeText = document.querySelector(".modeText");
    modeText.classList.toggle("dark-mode", darkMode);

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="modeSwitch">
        <div className="mode">
          <label className="toggle-switch">
            <input
              type="checkbox"
              id="toggle-btn"
              className="toggle-switch-checkbox"
              onChange={handleToggle}
              checked={darkMode}
            />
            <span className="slider round"></span>
          </label>
          <div className="modeText">
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
          </div>
          <div className="modeText">|</div>
          <div className="modeText">
            {language === "en" ? (
              <span id="lang" onClick={handleLanguageChange}>
                TÜRKÇE
              </span>
            ) : (
              <span id="lang" onClick={handleLanguageChange}>
                ENGLISH
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
