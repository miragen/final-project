import React, { Component } from "react";
import "./Navbar.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <br />
        <br />
        <p>
          © PHL7 Developers &amp; Middletown, Delaware
          || Amazon
          <br />
          contact: miragen@amazon.com
          <br />
          <br />
        </p>
      </div>
    );
  }
}

export default Footer;