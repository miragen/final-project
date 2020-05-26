import React, { Component } from "react";
class Pagination1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { firstname: "Mirage", lastName: "Nepal" },
        { firstname: "Josh", lastName: "Beams" },
        { firstname: "Dave", lastName: "V" },
        { firstname: "Brett", lastName: "B" },
        { firstname: "Micheal", lastName: "M" },
        { firstname: "Sean", lastName: "S" },
        { firstname: "Mike", lastName: "M" },
        { firstname: "Rob", lastName: "R" },
    
      ],
     
      currentIndex: 1, //setting the pagination index
      noOfItems: 2
    };
  }
  changeIndex = index => {
    this.setState({
      currentIndex: index
    });
  };
  render() {
    var paginationCount = Math.ceil(
      this.state.list.length / this.state.noOfItems
    );
   
    var curentListCount = this.state.currentIndex * this.state.noOfItems; 
    var list = this.state.list.slice(
      curentListCount - this.state.noOfItems, 
      curentListCount
    );

    return (
      <div>
        {list.map((item, index) => {
          return <p key={index}>{item.firstname + " " + item.lastName}</p>;
        })}
        
        {[...Array(paginationCount)].map((item, index) => (
          <button key={index + 1} onClick={() => this.changeIndex(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    );
  }
}

export default Pagination1;