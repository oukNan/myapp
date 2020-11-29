import React, { Component } from 'react';
import './form.css';
import axios from 'axios';




//POST method
export default class Formfill extends Component {
    state = {
      fname: [],
      lname: []
    }
  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const fname = res.data;
            this.setState({ fname });
        })
        
   
   
}
   render() {
       return (
           <ul>
              { this.state.fname.map(company => <li>{company.name}</li>)}
               { this.state.lname }
               
           </ul>
           
       )
    }
    
}


