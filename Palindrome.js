import React, { Component } from 'react'

export default class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val) {
        this.setState( { userInput: val } )
    }
    isPalindrome(userInput) {
        let palindrome = userInput.split('').reverse().join('')
        if (userInput === palindrome) {
            this.setState( {palindrome: 'true'})
        } else {
            this.setState( {palindrome: 'false'})
        }
    }

    render() {
        return (
            // <p>Palindrome</p>
            <div className="puzzleBox palindromePB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
            </div>
        )
    }
}