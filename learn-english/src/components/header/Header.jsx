import logo from "./logo.png";
import "./header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="wrapper-header">
      <div className="header">
        <img
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          src={logo}
          alt={"logo"}
        />
        <div className="wrapper-btn">
          <button>
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
