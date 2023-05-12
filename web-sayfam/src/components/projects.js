import React from "react";

const data = [
  {
    projectName: "Grateful Diary",
    projectDescription:
      "Grateful Diary Project: Coded using React, redux thunk and toastify library.",
    projectProgrammes: ["react", "redux", "redux-thunk"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10-challenge",
    viewSiteLink: "https://ayse-notebook.vercel.app/",
    projectImg: "s10-challenge.png",
  },
  {
    projectName: "Calculator",
    projectDescription:
      "Calculator Project: Coded using React, redux, reducer, actions.",
    projectProgrammes: ["react", "redux", "reducer"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10g1-reducer-calculator",
    viewSiteLink: "https://calculator-ayse.vercel.app/",
    projectImg: "s10g1.png",
  },
  {
    projectName: "Movies",
    projectDescription:
      "Movies Project: Coded using React, logger middleware and redux.",
    projectProgrammes: ["react", "redux", "axios"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10g2-redux-filmler",
    viewSiteLink: "https://redux-films-ayse.vercel.app/movies",
    projectImg: "s10g2.png",
  },
  {
    projectName: "Movie Watch List",
    projectDescription:
      "Movie Watch List Project: Coded using React, logger middleware and redux.",
    projectProgrammes: ["react", "redux", "redux-logger"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10g3-redux-watchlist",
    viewSiteLink: "https://watchlist-ayse.vercel.app/",
    projectImg: "s10g3.png",
  },
  {
    projectName: "Get Random Jokes",
    projectDescription:
      "Get Random Jokes Project: Coded using React, react router dom, localStorage and toastify library.",
    projectProgrammes: ["react", "localStorage", "toastify"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10g4-thunk-and-apis",
    viewSiteLink: "https://get-random-jokes.vercel.app/",
    projectImg: "s10g4.png",
  },
  {
    projectName: "Shopping Cart",
    projectDescription:
      "Shopping Cart Project: Coded using React, logger middleware and redux.",
    projectProgrammes: ["react", "redux", "context"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s11g1-shopping-cart",
    viewSiteLink: "https://shopping-cart-ayse.vercel.app/",
    projectImg: "s11g1.png",
  },
  {
    projectName: "Friends",
    projectDescription:
      "Friends Project: Coded using React, react-hook-form, localStorage and axios.",
    projectProgrammes: ["react", "localStorage", "axios"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s11g2-client-auth-friends",
    viewSiteLink: "https://friends-database.vercel.app/",
    projectImg: "s11g2.png",
  },
  {
    projectName: "Favorite Movies",
    projectDescription:
      "Favorite Movies Project: Coded using React, CRUD operations, localStorage and axios.",
    projectProgrammes: ["react", "CRUD", "axios"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s11g3-crud-filmler",
    viewSiteLink: "https://crudmovies-project.vercel.app/movies",
    projectImg: "s11g3.png",
  },
];

const dataTr = [
  {
    projectName: "Minnet Günlüğü",
    projectDescription:
      "Minnet Günlüğü Projesi: React, redux thunk ve toastify kullanarak kodlandı.",
    projectProgrammes: ["react", "redux", "redux thunk"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10-challenge",
    viewSiteLink: "https://ayse-notebook.vercel.app/",
    projectImg: "s10-challenge.png",
  },
  {
    projectName: "Hesap Makinesi",
    projectDescription:
      "Hesap Makinesi Projesi: React, redux, reducer, actions kullanarak kodlandı.",
    projectProgrammes: ["react", "redux", "reducer"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10g1-reducer-calculator",
    viewSiteLink: "https://calculator-ayse.vercel.app/",
    projectImg: "s10g1.png",
  },
  {
    projectName: "Filmler",
    projectDescription:
      "Filmler Projesi: React, logger middleware ve redux kullanarak kodlandı.",
    projectProgrammes: ["react", "redux", "axios"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10g2-redux-filmler",
    viewSiteLink: "https://redux-films-ayse.vercel.app/movies",
    projectImg: "s10g2.png",
  },
  {
    projectName: "Film İzleme Listesi",
    projectDescription:
      "Film İzleme Listesi Projesi: React, logger middleware ve redux kullanarak kodlandı.",
    projectProgrammes: ["react", "redux", "redux-logger"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10g3-redux-watchlist",
    viewSiteLink: "https://watchlist-ayse.vercel.app/",
    projectImg: "s10g3.png",
  },
  {
    projectName: "Rastgele Şakalar Al",
    projectDescription:
      "Rastgele Şakalar Al Projesi: React, react router dom, localStorage ve toastify kütüphanesi kullanarak kodlandı.",
    projectProgrammes: ["react", "localStorage", "toastify"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s10g4-thunk-and-apis",
    viewSiteLink: "https://get-random-jokes.vercel.app/",
    projectImg: "s10g4.png",
  },
  {
    projectName: "Alışveriş Sepeti",
    projectDescription:
      "Alışveriş Sepeti Projesi: React, logger middleware ve redux kullanarak kodlandı.",
    projectProgrammes: ["react", "redux", "context"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s11g1-shopping-cart",
    viewSiteLink: "https://shopping-cart-ayse.vercel.app/",
    projectImg: "s11g1.png",
  },
  {
    projectName: "Arkadaşlar",
    projectDescription:
      "Arkadaşlar Projesi: React, react-hook-form, localStorage ve axios kullanarak kodlandı.",
    projectProgrammes: ["react", "localStorage", "axios"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s11g2-client-auth-friends",
    viewSiteLink: "https://friends-database.vercel.app/",
    projectImg: "s11g2.png",
  },
  {
    projectName: "Favori Filmler",
    projectDescription:
      "Favori Filmler Projesi: React, CRUD operations, localStorage, axios kullanarak kodlandı.",
    projectProgrammes: ["react", "CRUD", "axios"],
    gitHubLink: "https://github.com/ayseesahin/fsweb-s11g3-crud-filmler",
    viewSiteLink: "https://crudmovies-project.vercel.app/movies",
    projectImg: "s11g3.png",
  },
];

export default function Projects({ language }) {
  return language === "en" ? (
    <div className="projectsContainer">
      <div className="projects">
        <div className="projectCol">
          <h1 className="profile-heading">Projects</h1>
          <div className="pro">
            {data.map((project) => (
              <div className="card">
                <img
                  src={project.projectImg}
                  alt="projects"
                  className="projectsPhotos"
                />
                <h3 className="content-heading">{project.projectName}</h3>
                <p className="description-project">
                  {project.projectDescription}
                </p>
                <div className="programs">
                  <p>{project.projectProgrammes[0]}</p>
                  <p>{project.projectProgrammes[1]}</p>
                  <p>{project.projectProgrammes[2]}</p>
                </div>
                <div className="links">
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    onClick={() =>
                      alert("You are being redirected to the GitHub page!")
                    }
                  >
                    GitHub
                  </a>
                  <a
                    href={project.viewSiteLink}
                    target="_blank"
                    onClick={() =>
                      alert("You are being redirected to the site!")
                    }
                  >
                    View Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="projectsContainer">
      <div className="projects">
        <div className="projectCol">
          <h1 className="profile-heading">Projeler</h1>
          <div className="pro">
            {dataTr.map((project) => (
              <div className="card">
                <img
                  src={project.projectImg}
                  alt="projects"
                  className="projectsPhotos"
                />
                <h3 className="content-heading">{project.projectName}</h3>
                <p className="description-project">
                  {project.projectDescription}
                </p>
                <div className="programs">
                  <p>{project.projectProgrammes[0]}</p>
                  <p>{project.projectProgrammes[1]}</p>
                  <p>{project.projectProgrammes[2]}</p>
                </div>
                <div className="links">
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    onClick={() =>
                      alert("GitHub sayfasına yönlendiriliyorsunuz!")
                    }
                  >
                    GitHub
                  </a>
                  <a
                    href={project.viewSiteLink}
                    target="_blank"
                    onClick={() => alert("Siteye yönlendiriliyorsunuz!")}
                  >
                    Siteyi Görüntüle
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
