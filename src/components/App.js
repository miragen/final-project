import React, { Component } from 'react';
import Amazon from './Amazon.png';
import logo from './logo.svg';

import Navbar from "./nav/Navbar";
import Mirage from "./pages/Mirage";

import Test1 from "./pages/Test1";

import Footer from "./nav/Footer";
import './App.css';
import TopBar from './nav/TopBar';
import {Route, Redirect, Switch } from "react-router-dom";
import It from './pages/it';
import Engineering from './pages/engineering';
import Accounting from './pages/accounting';
import Home from './pages/home';



class App extends Component {
  render() {
    return (
      <div className="App">
          <main className="container">
          </main>
          
      <Navbar />
      <Test1 />
        <div className="main-body">
        <header className="App-header">
        <img src={Amazon} className="orange" alt="AmazonLogo" />
             <p><img src={logo} className="App-logo" alt="logo" /></p>
              <h1 className="App-title">Nucleus Applications</h1>
            </header>
            <TopBar/>
            <Switch>
            <Route path="/engineering" component={Engineering} />
            <Route path="/home" component={Home} />
            <Route path="/it" component={It} />
            <Route path="/accounting" component={Accounting} />
            <Route path="/Mirage" component={Mirage} />
           
            <Redirect from="/" exact to="/engineering" />
             {/*
            <Route path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
            */}
          </Switch>
          
            
            <br/>
            
            <Footer/>
            
           
        </div>

      </div>
    );
  }
}

export default App;
