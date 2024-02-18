import React from "react";
import Logo from "../../img/logo.png";
import "./Footer.scss";
import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import MiniLogo from "../../img/footer-mini-logo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer p-12 pb-4">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={Logo} alt="Gerkos" />
          <p className="font-semibold text-lg">
            {t("footer-text-1")}
            <br />
            {t("footer-text-2")}
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-top-right-card">
            <h3>{t("footer-top-link-1")}</h3>
            <div className="hr-steps"></div>
            <p>GERKOS</p>
            <p>c/o Bujar Merovic</p>
            <p>Heinrich-Kamp-Str. 1</p>
            <p>58300 Wetter a. d. Ruhr</p>
          </div>

          <div className="footer-top-right-card">
            <h3>{t("footer-top-link-2")}</h3>
            <div className="hr-steps"></div>
            <p>Tel: 0152 / 34 15 21 30</p>
            <p>info@gerkos.com</p>
          </div>

          <div className="footer-top-right-card">
            <h3>{t("footer-top-link-3")}</h3>
            <div className="hr-steps"></div>
            <div className="footer-top-right-card-row">
              <a target="_blank" href="http://www.facebook.com" rel="noopener">
                <FaFacebook />
              </a>

              <a target="_blank" href="http://www.instagram.com" rel="noopener">
                <FaInstagramSquare />
              </a>

              <a target="_blank" href="http://www.linkedin.com" rel="noopener">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t("footer-bottom-1")}</p>

        <div className="footer-bottom-right">
          <p>{t("footer-bottom-3-1")}</p>
          <p>{t("footer-bottom-3-2")}</p>
          <p>{t("footer-bottom-3-3")}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
