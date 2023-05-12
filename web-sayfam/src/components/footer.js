import React from "react";
export default function Footer({ language }) {
  return (
    <div className="footer_Container">
      <div className="footer">
        <div className="footerText">
          {language === "en" ? (
            <h2 className="lets">
              Let’s work together on <br /> your next product.
            </h2>
          ) : (
            <h2 className="lets">
              Haydi sonraki ürününüz üzerinde
              <br /> birlikte çalışalım.
            </h2>
          )}
          <div className="footerLinks">
            <a
              href="mailto:aysesah.95@gmail.com"
              className="mail"
              onClick={() => {
                language === "en"
                  ? alert("Do you want to send mail?")
                  : alert("Posta göndermek istiyor musunuz?");
              }}
            >
              👉aysesah.95@gmail.com
            </a>

            <div className="links-footer">
              {language === "en" ? <p>Personal Blog</p> : <p>Kişisel Blog</p>}
              <a
                href="https://github.com/ayseesahin"
                className="githubFooter"
                target="_blank"
                onClick={() => {
                  language === "en"
                    ? alert("You are being redirected to the GitHub page!")
                    : alert("GitHub sayfasına yönlendiriliyorsunuz!");
                }}
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/ayşe-nur-şahin-758b66b3/"
                className="linkedinFooter"
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
      </div>
    </div>
  );
}
