import React, { Component } from 'react';
import "./Mirage.css";
import Showhidden from './Showhidden';

export default class Mirage extends Component {
    render() {
        return (
            <div className="aa">
                <p className="bb">
                   Performace of employee
                </p>
                <h4>Please check the bottom 5 employees who needs some motivtion to meet the target. <br/>Also, find out if they have any barrier or other issues! </h4>
                <br/>   <br/>
                <Showhidden/>
                
            </div>
        );
    }
}

