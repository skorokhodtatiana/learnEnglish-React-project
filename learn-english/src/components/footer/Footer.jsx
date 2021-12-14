import "./_footer.scss";
import logo from "../../assets/images/logo.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const Footer = (props) => {
  const openTable = () => {
    props.onClickButtonTable();
  };

  return (
    <div className="wrapper-footer">
      <div className="footer">
        <header className="footer__header">
          <div className="footer__logo">
            <Link to="/">
              <img className="logo" src={logo} alt={"logo"} />
            </Link>
          </div>
          <div className="footer__pictures"></div>
          <div className="footer__socialMedia">
            Follow us:{" "}
            <a href="https://www.instagram.com/tanja_skorohod/?hl=ru">
              <FontAwesomeIcon icon={faInstagram} className="iconInstagram" />
            </a>
            <FontAwesomeIcon icon={faFacebook} className="iconFacebook" />
            <a href="mailto:tanjakharza@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="iconEnvelope" />
            </a>
          </div>
        </header>
        <nav className="footer__nav">
          <ul className="footer__wrapper-cards">
            <li className={"footer__card card-food"}>
              <NavLink to="/topicCard/Food" className="link">
                Food
              </NavLink>
            </li>
            <li className={"footer__card card-family"}>
              <NavLink to="/topicCard/Family" className="link">
                Family{" "}
              </NavLink>
            </li>
            <li className={"footer__card card-animal"}>
              <NavLink to="/topicCard/Animals" className="link">
                Animals
              </NavLink>
            </li>
            <li className={"footer__card card-travel"}>
              <NavLink to="/topicCard/Travel" className="link">
                Travel
              </NavLink>
            </li>
            <li className={"footer__card card-work"}>
              <NavLink to="/topicCard/Work" className="link">
                Work
              </NavLink>
            </li>
            <li href="#top" className={"footer__card card-nature"}>
              <NavLink to="/topicCard/Nature" className="link">
                Nature
              </NavLink>
            </li>
          </ul>
          <ul className="footer__links">
            <li className="item-menu">
              <NavLink className="item-menu" to="/*">
                About
              </NavLink>
            </li>
            <li className="item-menu">
              <NavLink className="item-menu" to="/table">
                Flash_cards
              </NavLink>
            </li>
            <li className="item-menu">
              <NavLink to="/*" className="item-menu">
                Сooperation
              </NavLink>
            </li>
            <li className="item-menu">
              <NavLink className="item-menu" to="/">
                Topic_cards
              </NavLink>
            </li>
            <li className="item-menu">
              <NavLink to="/*" className="item-menu">
                Contact
              </NavLink>
            </li>
          </ul>
          <section className="footer__btn">
            <NavLink className="link" to="/table">
              <button onClick={() => openTable()} className="footer__btnSearch">
                {" "}
                Browse or Search
              </button>
            </NavLink>
          </section>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
