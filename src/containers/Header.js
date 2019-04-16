import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    return (
      <div className="placeholder">
        <div className="navbar">
          <Link to="/"><div className="navtitle">Welcome to the Universe</div></Link>
          <div className="emily"><a href="https://emilyjennings.github.io">An App Made by Emily</a></div>
        </div>
      </div>

    );

}

export default Header
