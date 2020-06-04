import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      array: [],
      value: "",
      newInput: "",
    };
  }

  insertCommas = (inp) => {
    let str = inp;
    // let oldstr = str.split();
    // console.log("newsdaf", oldstr);
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
      if (i === 0) {
        newstr = str[i];
      } else if (i === str.length) {
        newstr = newstr + `, ${str[i]}`;
      } else {
        newstr = newstr + `, ${str[i]}`;
      }
    }
    console.log("newstr:", newstr);
    return newstr;
  };

  mainFunction = (gameArray) => {
    let array = Array.from(gameArray);
    let arraysLenght = array.length - 1;

    for (let i = 0; i < array.length; ) {
      console.log(`Zingsnis nr.${i} = ${array[i]}`);
      let diceNumber = array[i];
      if (i === arraysLenght) {
        this.setState({
          value: "Kongratualations! You wuon!, You reached the last step!",
        });
        return console.log("you won, you reached last step!", arraysLenght, i);
      }

      if (diceNumber === 0) {
        this.setState({ value: "Kongratualations! You Lost you looser hehe!" });
        return console.log("you loose");
      }

      let asd = arraysLenght - i;

      if (array[i] > asd) {
        this.setState({
          value:
            "Kongratualations! You lost! Cuz You looser and nobody likes you",
        });
        return console.log(
          "you loose cuz its over our array",
          "\n",
          `Kiek liko ejimu: ${asd}`,
          "\n",
          `Ejimu i prieki skaicius: ${array[i]}`,
          "\n",
          `Kelintas sekos numeris: ${i}`
        );
      }
      i = i + diceNumber;
    }
  };

  handleInput = (value) => {
    let oldStringWithNoCommas = this.state.newInput.replace(/[ ,.]/g, ""); //Value before input
    let newStringWithoutCommas = value.replace(/[ ,.]/g, ""); //Value with input

    const checkIfDigit = /^\d+$/;

    // Check if in new value there is only digits then seperate string with commas
    if (
      checkIfDigit.test(newStringWithoutCommas) ||
      !newStringWithoutCommas.length
    ) {
      let separatedText = this.insertCommas(newStringWithoutCommas);
      return this.setState({ newInput: separatedText });
    } else {
      //If new value contains anything but digit return old value
      let separatedText = this.insertCommas(oldStringWithNoCommas);
      return this.setState({ newInput: separatedText });
    }
  };

  pushStringToArray = () => {
    let stringOfNumbers = this.state.newInput.replace(/[ ,.]/g, "");
    let stringLenght = stringOfNumbers.length;
    let arrayOfNumbers = [];
    for (let i = 0; i < stringLenght; i++) {
      arrayOfNumbers.push(parseInt(stringOfNumbers[i]));
      console.log(`item nr. ${i} : `, stringOfNumbers[i]);
    }
    this.mainFunction(arrayOfNumbers);
  };

  render() {
    return (
      <div className="App">
        <p>Hi, to participate in this game, please insert random numbers</p>
        <input
          value={this.state.newInput}
          onChange={(val) => this.handleInput(val.target.value)}
        />

        <button style={{ marginTop: 10 }} onClick={this.pushStringToArray}>
          Lets roll the dice!
        </button>
        {this.state.value !== "" ? this.state.value : null}
      </div>
    );
  }
}

export default App;
