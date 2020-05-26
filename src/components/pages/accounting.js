import React, { Component } from 'react';
import ToDo2 from './ToDo2';
import Table1 from './Table1';
import Tableau1 from './Tableau1'

class Accounting extends Component {
    state = {  }
    render() { 
        return (
             <div>
            <p>This is React account</p>
            <ToDo2/>
            <Table1 />
            <Tableau1/>

        </div> );
    }
}
 
export default Accounting;