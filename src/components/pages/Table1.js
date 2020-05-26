import React, { Component } from "react";
class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
    this.setClear = this.setClear.bind(this);
  }
  handleChange = value => {
    this.setState({
      expression: this.state.expression + value
    });
  };
  handleCalculation = () => {
    this.setState({
      expression: eval(this.state.expression).toString()
    });
  };
  setClear = () => {
    this.setState({
      expression: ""
    });
  };
  render() {
    return (
      <div>
        <table cellspacing="0px">
          <thead>
            <tr>
              <td colspan="3" className="border1px">
                {this.state.expression}
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  this.handleChange("1");
                }}
                className="border1px"
              >
                1
              </td>
              <td
                onClick={() => {
                  this.handleChange("2");
                }}
                className="border1px"
              >
                2
              </td>
              <td
                onClick={() => {
                  this.handleChange("3");
                }}
                className="border1px"
              >
                3
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  this.handleChange("4");
                }}
                className="border1px"
              >
                4
              </td>
              <td
                onClick={() => {
                  this.handleChange("5");
                }}
                className="border1px"
              >
                5
              </td>
              <td
                onClick={() => {
                  this.handleChange("6");
                }}
                className="border1px"
              >
                {" "}
                6
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  this.handleChange("7");
                }}
                className="border1px"
              >
                7
              </td>
              <td
                onClick={() => {
                  this.handleChange("8");
                }}
                className="border1px"
              >
                8
              </td>
              <td
                onClick={() => {
                  this.handleChange("9");
                }}
                className="border1px"
              >
                9
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  this.handleChange("0");
                }}
                className="border1px"
              >
                0
              </td>
              <td
                onClick={() => {
                  this.handleChange("+");
                }}
                className="border1px"
              >
                +
              </td>
              <td
                onClick={() => {
                  this.handleChange("-");
                }}
                className="border1px"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  this.handleCalculation();
                }}
                className="border1px"
              >
                =
              </td>
              <td
                onClick={() => {
                  this.handleChange("*");
                }}
                className="border1px"
              >
                *
              </td>
              <td
                onClick={() => {
                  this.handleChange("/");
                }}
                className="border1px"
              >
                /
              </td>
            </tr>
            <tr>
              <td onClick={this.setClear} colspan="3" className="border1px">
                C
              </td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Table1;