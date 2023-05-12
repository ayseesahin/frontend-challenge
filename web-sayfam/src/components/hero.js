import React from "react";
import { Link } from "react-scroll";
export default function Hero({ language }) {
  return (
    <div className="heroContainer">
      <div className="hero">
        <div className="hero-left">
          <div className="name">
            <div className="lineAndName">
              <h5 className="line">___________</h5>
              <h5>Ayşe Nur Şahin</h5>
            </div>
          </div>
          {language === "en" ? (
            <h1 className="heading">
              Creative thinker <br />
              Minimalism lover
            </h1>
          ) : (
            <h1 className="heading">
              Yaratıcı Düşünür <br />
              Minimalist Sever
            </h1>
          )}
          {language === "en" ? (
            <p className="intro">
              Hi, I’m Ayşe. I’m a full-stack developer. If you are looking for a
              Developer who to craft solid and scalable frontend products with
              great user experiences. Let’s shake hands with me.
            </p>
          ) : (
            <p className="intro">
              Merhaba, ben Ayşe. Ben bir full-stack geliştiricisiyim. Mükemmel
              kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç ürünleri
              oluşturacak bir Geliştirici arıyorsanız. Benimle el sıkışalım.
            </p>
          )}
          <div className="buttons">
            <div className="hire-button">
              <Link to="contactScroll" smooth={true} duration={1500}>
                {language === "en" ? (
                  <p className="whiteText">Contact</p>
                ) : (
                  <p className="whiteText">İletişim</p>
                )}
              </Link>
            </div>
            <div className="github-button">
              <img src="GitHub.png" alt="github" />
              <a
                href="https://github.com/ayseesahin"
                target="_blank"
                onClick={() => {
                  language === "en"
                    ? alert("You are being redirected to the GitHub page!")
                    : alert("Github sayfasına yönlendiriliyorsunuz!");
                }}
              >
                Github
              </a>
            </div>
            <div className="linkedin-button">
              <img src="Linkedin.png" alt="linkedin" />
              <a
                href="https://www.linkedin.com/in/ayşe-nur-şahin-758b66b3/"
                target="_blank"
                onClick={() => {
                  language === "en"
                    ? alert("You are being redirected to LinkedIn page!")
                    : alert("LinkedIn sayfasına yönlendiriliyorsunuz!");
                }}
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <img className="hero-image" src="Adsız tasarım.png" alt="profile" />
      </div>
    </div>
  );
}
