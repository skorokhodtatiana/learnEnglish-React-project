import logo from "../../assets/images/logo.png";
import "./_header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapper-header">
      <div className="header">
        <Link className="wrapper-img" to="/">
          <img className="img" src={logo} alt={"logo"} />
        </Link>
        <div className="wrapper-btn">
          <button className={"btn"}>
            <FontAwesomeIcon icon={faSearch} className="search" />
          </button>
          <button className={"btn btnLogIn"}>Log In</button>
          <button className={"btn btnSignUp"}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
