import "./_footer.scss";
import logo from "../../assets/images/logo.png";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="wrapper-footer">
      <div className="footer">
        <header className="footer__header">
          <div className="footer__logo">
            <img className="logo" src={logo} alt={"logo"} />
          </div>
          <div className="footer__pictures"></div>
          <div className="footer__socialMedia">
            Follow us:{" "}
            <FontAwesomeIcon icon={faInstagram} className="iconInstagram" />
            <FontAwesomeIcon icon={faFacebook} className="iconFacebook" />
          </div>
        </header>
        <nav className="footer__nav">
          <section className="footer__wrapper-cards">
            <a href="#top" className={"footer__card card-food"}>
              Food
            </a>
            <a href="#top" className={"footer__card card-family"}>
              Family
            </a>
            <a href="#top" className={"footer__card card-animal"}>
              Animals
            </a>
            <a href="#top" className={"footer__card card-travel"}>
              Travel
            </a>
            <a href="#top" className={"footer__card card-work"}>
              Work
            </a>
            <a href="#top" className={"footer__card card-nature"}>
              Nature
            </a>
          </section>
          <section className="footer__links">
            <a href="#top" className="item-menu">
              About
            </a>
            <a href="#top" className="item-menu">
              Flashcards
            </a>
            <a href="#top" className="item-menu">
              Сooperation
            </a>
            <a href="#top" className="item-menu">
              Career
            </a>
            <a href="#top" className="item-menu">
              Contact
            </a>
          </section>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
