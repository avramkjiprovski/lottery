import './App.css';
import React, { Component } from 'react'
import Lottery from './components/Lottery';

export default class App extends Component {
  constructor(){
    super()
    this.state={

    }
  }
  render() {

    return (
      <div>

        <Lottery />
        <Lottery numBalls={3} maxNum={100} />

      </div>
    )
  }
}

