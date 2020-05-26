import React, { Component } from "react";
import "./Test1.css";

export default class Test1 extends Component {

    openNav() {
        console.log("open nav");
        document.getElementById("mySidenav").style.width = "200px";
    }

    closeNav() {
        console.log("close nav");
        document.getElementById("mySidenav").style.width = "0";
    }

    render() {
        return (
            
            <div id="main-nav">
                 <span onClick={() => this.openNav()}> &#9776; Applications </span>
                <div id = "mySidenav" className = "sidenav">
                
                    <a className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                    <div className="navbar-main" id="navbar">
                <ul id="nav">
                    {/* <li><a href="#home"><button>Home</button></a></li>
                    <li><a href="#home">Documentation</a></li>
                    <li><a href="#home">FAQ</a></li>
                    <li><a href="#home">Submit a SIM</a></li>
                    <li><a href="https://w.amazon.com/bin/view/PHL7_Development/">PHL7 Dev</a></li>
                    Triage */}
                    <li><a href="#home"><button>Boson</button></a></li>
                    <li><a href="https://fc-apps.corp.amazon.com/BTS2/triage">Triage</a></li>
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
                    <li><a href="#home">Upcoming..</a></li>
                </ul>
                {/* <img src={arrow} className="arrow-icon" alt="arrow"/> */}
            </div>
                </div>
            </div>
        );
    }
}


