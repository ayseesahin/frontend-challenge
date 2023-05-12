import React from "react";
import { Link } from "react-scroll";

export default function Header({ language }) {
  return (
    <div className="HContainer">
      <div className="headerContainer">
        <h1 className="logo">A</h1>
        <div className="nav">
          <Link to="skillsScroll" smooth={true} duration={700}>
            {language === "en" ? <h5>Skills</h5> : <h5>Yetenekler</h5>}
          </Link>
          <Link>
            <Link to="projectsScroll" smooth={true} duration={700}>
              {language === "en" ? <h5>Projects</h5> : <h5>Projeler</h5>}{" "}
            </Link>
          </Link>
          <Link to="contactScroll" smooth={true} duration={1000}>
            {language === "en" ? (
              <h4 className="bgColor">Contact</h4>
            ) : (
              <h4 className="bgColor">İletişim</h4>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
