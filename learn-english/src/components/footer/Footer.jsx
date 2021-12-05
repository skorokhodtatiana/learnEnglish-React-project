import "./_footer.scss";
import logo from "../../assets/images/logo.png";
import React from "react";
//import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
//import TopicCard from "../topicCard/TopicCard";
import { browserHistory } from "react-router-dom";

// const Footer = (props, { history, location, match }) => {
const Footer = (props) => {
  // const {} = props;
  const openTable = () => {
    props.onClickButtonTable();
    // browserHistory.push("/table");
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
            {/* <li className={"footer__card card-food"}>
              <Link to="/" className={"footer__card card-food"}>
                Food
              </Link>
            </li> */}
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
          </ul>
          <ul className="footer__links">
            <li className="item-menu">
              <Link className="item-menu" to="/404">
                About
              </Link>
            </li>
            <li className="item-menu">
              <Link className="item-menu" to="/table">
                Flash_cards
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/404" className="item-menu">
                Сooperation
              </Link>
            </li>
            <li className="item-menu">
              <Link className="item-menu" to="/">
                Topic_cards
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/404" className="item-menu">
                Contact
              </Link>
            </li>
          </ul>
          <section className="footer__btn">
            <button onClick={() => openTable()} className="footer__btnSearch">
              <Link to="/table"> Browse or Search</Link>
            </button>
          </section>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
