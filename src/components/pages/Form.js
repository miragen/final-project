import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { firstname: "Mirage", lastName: "Nepal", _id: 1 },
        { firstname: "Josh", lastName: "", _id: 2 },
        { firstname: "Dave", lastName: "", _id: 3 },
        { firstname: "Brett", lastName: "", _id: 4 },
        { firstname: "Michael", lastName: "", _id: 5 },
        { firstname: "Sean", lastName: "", _id: 6 },
        { firstname: "Amazon", lastName: "Gurung", _id: 7 },
   
      ],
      isEdit: false
    };
    this.onDelete = this.onDelete.bind(this);
    //Even when I am not binding onChange, isEdit, handleUpdate, it is still working?
  }
  onDelete = item => {
    var arr = this.state.list.filter(abc => {
      return abc !== item;
    });
    this.setState({
      list: arr,
      isEdit: false
    });
  };
  isEdit = item => {
    this.setState({ isEdit: true });
  };
  handleChange = (event, item) => {
    var index = this.state.list.findIndex(obj => {
      return obj._id === item._id; //3
    });
    var data = this.state.list;
    data[index].firstname = event.target.value;
    this.setState({ list: data });
  };
  handleUpdate = () => {
    this.setState({ isEdit: false });
    alert("updated");
  };
  render() {
    return (
      <div>
        <table className="customers">
          <thead>
            <tr>
              
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {this.state.list.map(item => {
              return (
                <tr key={item._id}>
                  {!this.state.isEdit && <td>{item.firstname}</td>}
                  {this.state.isEdit && (
                    <td>
                      <input
                        type="text"
                        value={item.firstname}
                        name="firstname"
                        onChange={e => {
                          this.handleChange(e, item);
                        }}
                      />
                    </td>
                  )}
                  <td>{item.lastName}</td>
                  <td>
                    {!this.state.isEdit && (
                      <button onClick={() => this.isEdit(item)}>Edit</button>
                    )}
                    {this.state.isEdit && (
                      <button onClick={() => this.handleUpdate(item)}>
                        Update
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => this.onDelete(item)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;