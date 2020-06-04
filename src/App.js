import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainArray: [],
      input: "",
      array: [],
      value: '',
      showInput: '',
      noSpaceText: ''
    };
  }
  pushInput = (input) => {
    // let message = this.state.input;
    let lastIndexas = input.length - 1;
    let lastInput = input[lastIndexas];
    console.log("inputai", input.length, input, input[lastIndexas]);

    const onlyNumber = /^\d+$/;
    // const numberAndSigns = /^[\d,\s]+$/;
    if (input === "") return this.setState({ input: "", value: "all good" });

    // if (onlyNumber.test(lastInput)) {
    //   let gameArray = [];
    //   let beTarpuIrBeKableliu = input.replace(/[ ,.]/g, "");
    //   let arraySuTarpaisIrKableliais = this.seperateComas(beTarpuIrBeKableliu);
    //   for (let i = 0; i < beTarpuIrBeKableliu.length; i++) {
    //     console.log(`Itemas nr${i}: ${beTarpuIrBeKableliu[i]}`);
    //     gameArray.push(parseInt(beTarpuIrBeKableliu[i]));
    //   }
    //   console.log("skaiciu seka arejuje:", gameArray);
    //   this.setState({ input: arraySuTarpaisIrKableliais });
    // }

    this.setState({ input });
  };

  bandom = (input) => {
    let lastIndexas = input.length - 1;
    let lastInput = input[lastIndexas];
    const onlyNumber = /^\d+$/;
    const numberAndSigns = /^[\d,\s]+$/;
    if (onlyNumber.test(lastInput)) {
    }
    if (numberAndSigns.test(lastInput)) console.log("numeris arba coma");
  };
  give = () => {
    let str = "1, 2, 3, 4, 5, 6";
    let beTarpuIrBeKableliu = str.replace(/[ ,.]/g, "");

    let str2 = "123456";
    let arraySuTarpaisIrKableliais = this.seperateComas(str2);

    console.log("asdf", beTarpuIrBeKableliu, "\n", arraySuTarpaisIrKableliais);
  };

  seperateComas = (inp) => {
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
  playGame = () => {
    // const regex = /^\d+$/;
    // let str = this.state.input.toString();

    // if (regex.test(this.state.input)) { this.setState({ value: 'true' }); }
    // else { this.setState({ value: 'put digits not words' }); }
    let message = this.state.input;

    this.setState({ value: message });
  };
  componentDidMount() {
    // this.mainFunction();
    // this.seperateComas();
    // this.give();
    this.nefun();
  }

  mainFunction = (ar) => {
    let array = [1, 3, 0, 0, 6, 4, 2, 1, 0, 0];
    let arraysLenght = array.length - 1;

    for (let i = 0; i < array.length;) {
      console.log(`Zingsnis nr.${i} = ${array[i]}`);
      let diceNumber = array[i];
      if (i === arraysLenght)
        return console.log("you won, you reached last step!", arraysLenght, i);

      if (diceNumber === 0) return console.log("you loose");

      let asd = arraysLenght - i;

      if (array[i] > asd) {
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


  nefun = () => {
    let stri = '1245';
    let newStri = stri.replace(/\s+/g, ',')
    let newestStri = stri.split('').join(', ')

    let newestestStri = this.seperateComas(stri);


    this.setState({ value: newestStri })
  }
  inputHandler = text => {
    //WORKS!


    let FIRST = this.state.input;
    let SECOND = text;
    console.log('first', FIRST, 'second', SECOND)
    let lastIndexas = SECOND.length - 1;
    let lastInput = SECOND[lastIndexas];

    // const onlyNumber = /^\d+$/;
    // if (!onlyNumber.test(lastInput)) {
    //   return this.setState({ value: 'negalima vesti ne skaiciu' })
    // }
    //12
    //1, 2, 3
    const whiteSpace = /^\s+$/;
    console.log('lastInput', lastInput)
    let noSpcText = whiteSpace.test(lastInput) ? SECOND.replace(/[ ,.]/g, "") : FIRST.replace(/[ ,.]/g, "");
    let newNoSpcText = whiteSpace.test(lastInput) ? noSpcText : noSpcText + lastInput;

    console.log('yra speicu?', whiteSpace.test(lastInput))



    if (lastIndexas === -1) return this.setState({
      input: text,
      value: text,
      noSpaceText: text
    })

    if (lastIndexas === 0) return this.setState({
      input: text,
      value: text,
      noSpaceText: text
    })

    else {
      let newestestStri = this.seperateComas(newNoSpcText);
      return this.setState({ input: newestestStri, value: newestestStri, noSpaceText: newNoSpcText })
    }

    //WORKS!
  }

  render() {
    return (
      <div className="App">
        <p>
          Hi, to participate in this game, please insert random numbers and
          seperate them by comma ','
        </p>

        <input
          value={this.state.input}
          onChange={(val) => this.inputHandler(val.target.value)}
        />

        <button onClick={this.playGame}>asd</button>
        {this.state.value !== "" ? this.state.value : null}
      </div>
    );
  }
}

export default App;
