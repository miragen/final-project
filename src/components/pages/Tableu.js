import React, { Component } from 'react';  
import "tableau-api";  
  
  
class Tableu extends Component {  
  componentDidMount() {  
    this.initViz()  
  }  
  
  
  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/DUDFinalMirage/Story1?:display_count=y&:origin=viz_share_link';
    //const vizUrl = 'https://public.tableau.com/views/1000Startups_30/Sheet2?:display_count=y&:origin=viz_share_link';  
    const vizContainer = this.vizContainer;  
    new window.tableau.Viz(vizContainer, vizUrl)  
  }  
  
  
  render() {  
    return (  
      <div ref={(div) => { this.vizContainer = div }}>  
      </div>  
    )  
  }  
}  
  
  
export default Tableu;

