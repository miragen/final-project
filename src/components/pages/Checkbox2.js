import React, { Component } from "react";

class Checkbox2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: "",
      list: [],
      checkbox: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChecked = (e, obj) => {
    var arr = this.state.list.filter(item => {
      if (item.name === obj.name) {
        item.check = e.target.checked;
      }
      return item;
    });
    this.setState({
      list: arr
    });
  };
  onEnter = e => {
    e.preventDefault();
    var arr = this.state.list;
    arr.push({ name: this.state.emp, check: false });
    this.setState({
      list: arr,
      emp: ""
    });
  };
  onDelete = () => {
    var arr = this.state.list.filter(item => {
      return !item.check;
    });
    this.setState({
      list: arr
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Employee Name"
            value={this.state.emp}
            name="emp"
            onChange={e => this.handleChange(e)}
          ></input>
          <button onClick={e => this.onEnter(e)}>Add</button>
        </form>
        {this.state.list.map((item, index) => {
          return (
            <ol>
              {index + 1} {item.name}
              <input
                type="checkbox"
                checked={item.check}
                onChange={e => this.handleChecked(e, item)}
              ></input>
            </ol>
          );
        })}
        {this.state.list.length > 0 && (
          <button onClick={this.onDelete}>DELETE</button>
        )}
      </div>
    );
  }
}

export default Checkbox2;