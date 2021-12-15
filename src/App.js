import React from "react";
import "./App.css";
import Buttons from "./buttons";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteData: [],
      quote: "",
      author: "",
      buttonColor: "",
      divColor: "",
      colors: [
        "#16a085",
        "#27ae60",
        "#2c3e50",
        "#f39c12",
        "#e74c3c",
        "#9b59b6",
        "#FB6964",
        "#342224",
        "#472E32",
        "#BDBB99",
        "#77B1A9",
        "#73A857",
      ],
    };
    this.randomQuote = this.randomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const API =
      "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/";
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
            quoteData: data.quotes,
          },
          () => {
            this.handleClick();
          }
        );
      })
      .catch((error) => console.log("Error", error));
  }
  randomQuote() {
    const randomNumber = Math.floor(
      Math.random() * this.state.quoteData.length
    );
    return this.state.quoteData[randomNumber];
  }

  handleClick() {
    console.log("handleClick");
    const oneRandomQuote = this.randomQuote();
    const color = Math.floor(Math.random() * this.state.colors.length);
    this.setState({
      quote: oneRandomQuote.quote,
      author: oneRandomQuote.author,
      buttonColor: "blue",
      divColor: this.state.colors[color],
    });
  }

  render() {
    return (
      <div id="quote-box" style={{ background: this.state.divColor }}>
        <h1 id="text"> {this.state.quote}</h1>
        <h3 id="author">{this.state.author} </h3>
        <Buttons handleClick={this.handleClick} />
      </div>
    );
  }
}

export default QuoteBox;
