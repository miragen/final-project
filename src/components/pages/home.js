import React, { Component } from 'react';
import Checkbox2 from './Checkbox2'
import Pagination1 from './Pagination1'
import Tableu from './Tableu'


class Home extends Component {
    state = {  }
    render() { 
        return ( <div> 

            <br/>
            <br/>
            This Is Manager protal to view the LARS data of their emoplyee.
            <br/>
            <br/>
            <Checkbox2/>
            <Pagination1/>
            <Tableu/>
            

        </div> );
    }
}
 
export default Home;