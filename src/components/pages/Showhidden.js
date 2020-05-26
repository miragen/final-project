import React, { Component } from "react";
class Showhidden extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section1: true,
      section2: false
    };
    this.section1 = this.section1.bind(this);
    this.section2 = this.section2.bind(this);
  }
  section1 = () => {
    this.setState({
      section1: true,
      section2: false
    });
  };
  section2 = () => {
    this.setState({
      section2: true,
      section1: false
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.section1}>Top 5 High Profermer</button> -- &nbsp;
        <button onClick={this.section2}>Top 5 Low Performaer</button>
        {this.state.section1 && (
          <p>
            <ul>
                <br/>
                <li>Valladolid, Dave</li>
                <li>Davison, Brett</li>
                <li>Corso, Michael</li>
                <li>Hurst, Sean</li>
            </ul>
          </p>
        )}
        {this.state.section2 && (
          <p>
          <ul>
                <br/>
                <li> Mirage Nepal </li>
                <li> More More </li>
                <li> Blah </li>
            </ul>
          </p>
        )}
      </div>
    );
  }
}

export default Showhidden;