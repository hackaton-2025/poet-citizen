import { useState } from "react";
import AboutPopup from "./AboutPopup";
import Logo from "./Logo";

const Footer = (props) => {
  const [isAboutPopupOpen, setAboutPopupState] = useState(false);

  const openAboutPopup = () => setAboutPopupState(true);
  const closeAboutPopup = () => setAboutPopupState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer__content page__narrow">
          <Logo />
          <div className="footer__email">
            <p className="footer__email-title">Написать нам:</p>
            <a href="mailto:oberiu.info@ya.ru" className="footer__email-link">
              oberiu.info@ya.ru
            </a>
          </div>
          <button
            type="button"
            className="footer__about"
            onClick={openAboutPopup}
          >
            О проекте
          </button>
          <div className="footer__copyright">
            <p className="footer__copyright-title">Яндекс.Практикум</p>
            <p className="footer__copyright-subtitle">Hackaton 2025</p>
          </div>
        </div>
      </footer>
      <AboutPopup isOpen={isAboutPopupOpen} onClose={closeAboutPopup} />
    </>
  );
};

export default Footer;
