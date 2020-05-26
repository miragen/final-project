import React, { Component } from "react";

class ToDo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.toAdd = this.toAdd.bind(this);
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  toAdd = e => {
    e.preventDefault();
    var arr = this.state.list;
    arr.push(this.state.firstName);
    this.setState({
      list: arr,
      firstName: ""
    });
  };
  onDelete = del => {
    var newItem = this.state.list.filter(item => {
      return item !== del;
    });
    this.setState({
      list: newItem
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="Enter"
            onChange={e => this.handleChange(e)}
          ></input>
          <button onClick={e => this.toAdd(e)}>Add New</button>
        </form>
        {this.state.list.map(item => {
          return (
            <li>
              {item} <button onClick={() => this.onDelete(item)}>Delete</button>
            </li>
          );
        })}
      </div>
    );
  }
}

export default ToDo2;