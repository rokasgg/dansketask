import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      mainArray: [],
      input: '',
      array: [],
      value: [1, 2, 3, 4]
    }
  }
  pushInput = (input) => {
    let message = this.state.input;
    console.log('input', message.split(''))
    const regex = /^\d+$/;
    let arr = Array.from(this.state.array);
    let str;
    let newAR = arr.forEach((element, index) => {
      str = + `${element}, `
      if (arr.length === index) return str;
    });
    if (regex.test(input)) { this.setState({ input }); }
    else { this.setState({ value: 'put digits not words' }); }
    // this.setState({ input });
  }
  playGame = () => {
    // const regex = /^\d+$/;
    // let str = this.state.input.toString();

    // if (regex.test(this.state.input)) { this.setState({ value: 'true' }); }
    // else { this.setState({ value: 'put digits not words' }); }
    let message = this.state.input;

    this.setState({ value: message });
  }
  componentDidMount() {
    this.mainFunction();
  }

  mainFunction = ar => {
    let array = [1, 2, 0, 1, 0, 2, 0];
    let arraysLenght = array.length - 1;

    for (let i = 0; i < array.length;) {
      console.log(`Zingsnis nr.${i} = ${array[i]}`)
      let diceNumber = array[i];
      if (i === arraysLenght) return console.log('you won, you reached last step!', arraysLenght, i);

      if (diceNumber === 0) return console.log('you loose');

      let asd = arraysLenght - i;

      if (array[i] > asd) {
        return console.log('you loose cuz its over our array', '\n',
          `Kiek liko ejimu: ${asd}`, '\n',
          `Ejimu i prieki skaicius: ${array[i]}`, '\n', `Kelintas sekos numeris: ${i}`)
      }
      i = i + diceNumber;
    }
  }


  render() {
    return (
      <div className="App">
        <p>
          Hi, to participate in this game,
          please insert random numbers and seperate them by comma ','
        </p>

        <input
          value={this.state.input}
          onChange={val => this.pushInput(val.target.value)}
        />

        <button onClick={this.playGame}>asd</button>
        {this.state.value !== '' ? this.state.value : null}
      </div>
    );
  }

}

export default App;
