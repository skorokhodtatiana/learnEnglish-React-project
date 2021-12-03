import "./_footer.scss";
import logo from "../../assets/images/logo.png";
import React from "react";
//import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
//import TopicCard from "../topicCard/TopicCard";

// const Footer = (props, { history, location, match }) => {
const Footer = (props) => {
  // const {} = props;
  const openTable = () => {
    props.onClickButtonTable();
    // history.push("table");
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
            <a href="#top" className="item-menu">
              About
            </a>
            {/* <li href="#top" className="item-menu"> */}
            <Link className="item-menu" to="/table">
              Flash_cards
            </Link>
            {/* </li> */}
            <Link to="/404" className="item-menu">
              Сooperation
            </Link>
            {/* <a href="#top" className="item-menu">
              Сooperation
            </a> */}
            {/* <li href="#top" className="item-menu"> */}
            <Link className="item-menu" to="/topicCard">
              Topic_cards
            </Link>
            {/* </li> */}
            <a href="#top" className="item-menu">
              Contact
            </a>
          </ul>
          <section className="footer__btn">
            <button onClick={() => openTable()} className="footer__btnSearch">
              Browse or Search
            </button>
            {/* <button className="footer__btnCreate">Create Flashcard</button> */}
          </section>
        </nav>
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Footer;
