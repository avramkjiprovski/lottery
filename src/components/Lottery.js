import React, { Component } from 'react'
import LottoBall from './LottoBall'
import './Lottery.css'

export default class Lottery extends Component {
    static defaultProps = {
        numBalls: 7,
        maxNum: 37,
        title: 'Lotto'
    }
    constructor(props) {
        super(props)
        this.state = {
            numbers: Array.from({length: this.props.numBalls})
        }
        
        this.randomizeNumbers = this.randomizeNumbers.bind(this)
        this.generate = this.generate.bind(this)

    }

    generate(){
        this.setState(curState => ({
            numbers: curState.numbers.map(
                number => Math.floor(Math.random() * this.props.maxNum) +1
            )
        }))
    }

    randomizeNumbers(){
        this.generate()
    }


    render() {


        return (
            <div className="Lottery">
                
                <h1>{this.props.title}</h1>
                <div>
                    {
                        this.state.numbers.map(
                            n => (
                                <LottoBall number={n} />
                            ) 
                        )
                    }
                </div>

                <button onClick={this.randomizeNumbers}>Click.</button>
            </div>
        )
    }
}
