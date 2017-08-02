import React, {Component} from 'react';

class GuessTheNumber extends Component {
    
    _handleButtonClick(e) {
         
         var userGuess = Number(this.refs.userGuess.value);
         var numberToGuess = this.props.numberToGuess;
        
        e.preventDefault();
        
        if(userGuess === numberToGuess) {
            alert('You are correct');
        } else if(userGuess > this.props.numberToGuess) {
            alert('too high!');
        } else if(userGuess < this.props.numberToGuess) {
            alert('too low!');
        }
    }
    render() {
    
    return (
      <form onSubmit={this._handleButtonClick.bind(this)}>
        <input type="text" ref="userGuess" />
        <button type="submit">Check</button>
      </form>
    );
  }
    
}
export default GuessTheNumber;