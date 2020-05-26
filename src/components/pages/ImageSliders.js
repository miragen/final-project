import React, { Component } from "react";
import aces from "./aces.jpg";
import cs from "./cs.jpg";
import earth from "./earth.JPG";
import whiteb from "./whiteb.png";


class ImageSliders extends Component {
  constructor(props) {ImageSliders
    super(props);
    this.state = {
      imageIndex: 0
    };
    this.leftPrevious = this.leftPrevious.bind(this);
    this.rightNext = this.rightNext.bind(this);
  }
  leftPrevious = () => {
    this.setState(prevState => ({
      imageIndex: --prevState.imageIndex
    }));
  };
  rightNext = () => {
    this.setState(prevState => ({
      imageIndex: ++prevState.imageIndex
    }));
  };
  render() {
    let imgArray =
      
      [
        { img: aces, name: "it_ 1" },
        { img: cs, name: "it_ 2" },
        { img: earth, name: "it_ 3" },
        { img: whiteb, name: "it_ 4" },
        
      ];
    return (
      <div
        style={{
          position: "relative",
          height: "700px",
          width: "2050px",
          margin: "5px",
          text: "left",
        
        }}
      >
        <button
          className="btn btn-primary btn-small"
          onClick={this.leftPrevious}
          disabled={this.state.imageIndex === 0 ? true : false}
        >
        Previous
        </button>
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
    
        {imgArray.map((item, index) => {
          return (
            index === this.state.imageIndex && (
              <div style={{ position: "absolute" }}>
                <img src={item.img} width="900px" height="550px" fluid />
                {/*{item.name}*/}
              </div>
            )
          );
        })}
        <button className="btn btn-primary btn-small"
          onClick={this.rightNext}
          disabled={ this.state.imageIndex === imgArray.length - 1 ? true : false }
        >
          Next
        </button>
      </div>
    );
  }
}

export default ImageSliders;
