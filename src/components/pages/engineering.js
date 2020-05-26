import React, { Component } from 'react';
import ImageSliders from './ImageSliders';


import './engineering.css'


class Engineering extends Component {
    state = {  }
    render() { 
        return ( <div>
        <br/> <b>
            <p className='pp'>&nbsp;&nbsp; &nbsp;ACES innatiative collobration with PHL7 Dev team</p>

            </b>
           <div className='slider'><ImageSliders/></div> 
           

        </div> );
    }
}
 
export default Engineering;