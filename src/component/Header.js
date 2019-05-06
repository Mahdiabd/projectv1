import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <ul className="NAV">
       <li> <NavLink className="link" to="/" activeClassName="is-active" exact>
          Home
        </NavLink></li>
      

        {/* <NavLink to="/book" activeClassName="is-active">
          book
        </NavLink>
         */}

      <li><NavLink className="link" to="/Carousel" activeClassName="is-active">
          About
        </NavLink></li>
        <li><NavLink className="link" to="/SignUp" activeClassName="is-active">
          SignUp
        </NavLink></li>
        <li><NavLink className="link" to="/SignIn" activeClassName="is-active">
          SignIn
        </NavLink></li>
        
        {/* <NavLink to="/test" activeClassName="is-active">
          okey
        </NavLink> */}
        </ul>
      </div>
    );
  }
}

export default Header;
