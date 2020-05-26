import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";
// import arrow from './arrow.svg';
import "./Navbar.css";


export default class Navbar extends Component {

    // navOpenClose() {
    //     var navbar = document.getElementbyID('navbar');
    //     var state = navbar.style.width < 50;
    //     if (state) {
    //         navbar.style.width = "150px";
    //     }
    //     else {
    //         navbar.style.width = "0px";
    //     }
    // }

    render() {
        return (
            <div className="navbar-main" id="navbar">
                <ul id="nav">
                    {/* <li><a href="#home"><button>Home</button></a></li>
                    <li><a href="#home">Documentation</a></li>
                    <li><a href="#home">FAQ</a></li>
                    <li><a href="#home">Submit a SIM</a></li>
                    <li><a href="https://w.amazon.com/bin/view/PHL7_Development/">PHL7 Dev</a></li>
                    Triage */}


                    <li><a href="https://phonetool.amazon.com/search?search_query[filter_type]=All+fields&search_query[query]=PHL7">PHL7 Contact</a></li>
                    <li><a href="#Inbound">Inbound </a></li>
                    <li><a href="#Outbound">Outbound </a></li>
                    <li><a href="#ICQA">ICQA </a></li>
                    <li><a href="https://t.corp.amazon.com/create/templates/c1085e6f-a995-4e94-8967-7287b94feebe">Submit a Sim </a></li>
                    <li><a href="https://w.amazon.com/bin/view/PHL7_Development/">PHL7 wiki </a></li>

                    {/* <li><a href="https://fc-apps.corp.amazon.com/BTS2/triage">Triage</a></li>
                    <li><a href="#home">Cubby Buddy</a></li>
                    <li><a href="#home">Buckboard</a></li>
                    <li><a href="#home">Learning Retrian</a></li>
                    <li><a href="#home">Spyglass</a></li>
                    <li><a href="#home">Rebin Simulator</a></li>
                    <li><a href="#home">HR Easy Ticket</a></li>
                    <li><a href="#home">Manager In Path</a></li>
                    <li><a href="#home">Workbench</a></li>
                    <li><a href="#home">POST</a></li>
                    <li><a href="#home">Spyglass</a></li>
                    <li><a href="#home">Speedway</a></li>
                    <li><a href="#home">FERIS</a></li>
                    <li><a href="#home">Touchstone</a></li>
                    <li><a href="#home">SURA</a></li>
                    <li><a href="#home">Inbound Problem Solve Links</a></li>
                    <li><a href="#home">Upcoming..</a></li> */}
                </ul>
                {/* <img src={arrow} className="arrow-icon" alt="arrow"/> */}
            </div>
        );
    }
}



