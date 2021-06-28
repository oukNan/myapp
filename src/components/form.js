import React, { Component } from 'react';
import './form.css';
import axios from 'axios';




//POST method
export default class Formfill extends Component {
    state = {
      f_choice: [],
      s_choice: []
    }
  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const f_choice = res.data;
            this.setState({ f_choice });
        })
        
   
   
}
   render() {
       return (
           <ul>
              { this.state.f_choice.map(company => <li>{company.name}</li>)}
               { this.state.s_choice }
               
           </ul>
           
       )
    }
    
}


