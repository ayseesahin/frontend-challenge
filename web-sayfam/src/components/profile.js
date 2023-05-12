import React from "react";

export default function Profile({ language }) {
  return language === "en" ? (
    <div className="profileContainer">
      <div className="profile">
        <div className="profile-info">
          <h1 className="profile-heading">Profile</h1>
          <div className="profile-infoText">
            <div className="profile-box">
              <div className="right">
                <h3 className="content-heading">Profile</h3>
                <div className="first-part">
                  <div className="keys">
                    <p>Birth Date</p>
                    <p>City</p>
                    <p>Education Status</p>
                    <br /> <br /> <br /> <br />
                    <p>Position</p>
                  </div>
                  <div className="values">
                    <p>01.01.1996</p>
                    <p>İstanbul</p>
                    <p>
                      Haliç University, Physiotherapy and Rehabilitation, 2019
                    </p>
                    <p>Frondend Developer,UI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-box">
              <h3 className="content-heading">About Me</h3>
              <p>
                I am a Full Stack Developer trying to improve himself. I love
                working as part of a team, taking advantage of others'
                perspectives, collaborating to achieve common goals, and working
                towards making the Web accessible to everyone.
                <br /> <br />I am open to learning and I believe that anyone can
                be successful in any field they want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="profileContainer">
      <div className="profile">
        <div className="profile-info">
          <h1 className="profile-heading">Profile</h1>
          <div className="profile-infoText">
            <div className="profile-box">
              <div className="right">
                <h3 className="content-heading">Profil</h3>
                <div className="first-part">
                  <div className="keys">
                    <p>Doğum Tarihi</p>
                    <p>Şehir</p>
                    <p>Eğitim Durumu</p>
                    <br /> <br />
                    <p>Pozisyon</p>
                  </div>
                  <div className="values">
                    <p>01.01.1996</p>
                    <p>İstanbul</p>
                    <p>
                      Haliç Üniversitesi, Fizyoterapi ve Rehabilitasyon, 2019
                    </p>
                    <p>Frondend Developer,UI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-box">
              <h3 className="content-heading">Hakkımda</h3>
              <p>
                Kendini geliştirmeye çalışan bir Full Stack Developer'ım. Bir
                ekibin parçası olarak çalışmak, başkalarının perspektiflerinden
                faydalanmak, ortak hedeflere ulaşmak için işbirliği yapmak ve
                Web'in herkes için erişilebilir olmasını sağlamaya yönelik
                çalışmalar yapmayı seviyorum. <br />
                <br />
                Öğrenmeye açığım ve isterse herkesin istediği alanda başarılı
                olabileceğine inanıyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
