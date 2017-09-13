import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  state = {
    calendar:null
  }


  componentDidMount(){
    const { store } = this.props;

    store.subscribe( ()=>{
      this.setState( {
        calendar : store.getState()
      });
    });
  }

  onSubmitFood = ()=>{
    const { store } = this.props;

    console.log('input value:',this.input.value)

    store.dispatch( addRecipe( {

      day: 'monday',
      meal: 'brefast',
      recipe : {
        label: this.input.value
      }

    }));

    this.input.value = ''
  }

  render() {
    return (
      <div>
        <input 
          type='text'
          ref={ input=> this.input=input }
          placeholder="Mondays brefast"/>
        <button
          onClick={ this.onSubmitFood }>Submit</button>
      </div>
    );
  }
}

export default App;