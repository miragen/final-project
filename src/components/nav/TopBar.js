import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./TopBar.css"

const TopBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <Link className="navbar-brand" to="/home">
          Home &nbsp;&nbsp;|
        </Link>
        <NavLink className="navbar-brand" to="/it">
          Documentation &nbsp;&nbsp; |
        </NavLink>
        <NavLink className="navbar-brand" to="/engineering">
          Current Development &nbsp;&nbsp;  |
        </NavLink>
        <NavLink className="navbar-brand" to="/accounting">
          Log &nbsp;&nbsp; |
        </NavLink>
        <NavLink className="navbar-brand" to="/Mirage">
          Call out &nbsp;&nbsp; |
        </NavLink>
       

             
<div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <Link
              to="/accounting"
              className="dropdown-toggle navbar-brand"
              data-toggle="dropdown"
            >
              Developer configuration
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/engineering"> User Profile </Link>
                {/*<Link to="/accounting">Accounting</Link>*/}
              </li>
              <li>
                <Link to="/it">Choose your site</Link>
              </li>
              <li>
                <Link to="/accounting">Git updates</Link>
              </li>
              <li>
                <Link to="/it">New Features</Link>
              </li>
              <li>
              <a href="https://fc-apps.corp.amazon.com/PHL7/ib_links">Important FC links</a>
               
              </li>
              <li><a href="https://w.amazon.com/bin/view/PHL7_Development/">PHL7 Dev</a></li>
            </ul>
          </li>
        </ul>
      </div>


      </nav>
    );
  };
  
  export default TopBar;
  