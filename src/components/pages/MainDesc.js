import React, { Component } from "react";
import logo from './logo.svg';
import "./MainDesc.css";

export default class MainDesc extends Component {
    render() {
        return (
            <div className="main-area">
                <p className="info-disclaim">
                <img src={logo} class="App" alt="logo" />
                    Use the navigation bar to get to the documentation of the application that you wish to learn more about.  If there are any questions, issues, concerns or bugs, feel free to submit a SIM.
               
                </p>
            </div>
        );
    }
}
