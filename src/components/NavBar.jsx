import React from "react";
import { Link } from "react-router-dom";
import starwar from "../asset/img/starwar.svg";

function NavBar() {
  return (
    <nav>
      <div className="nav-bar">
        <Link to="/">
          <div className="img">
            <img src={starwar} alt="starwar" />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
