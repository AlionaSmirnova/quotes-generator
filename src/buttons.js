import "./App.css";
import React from "react";
class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="buttons">
        <a
          id="tweet-quote"
          className="button"
          href={`https://twitter.com/intent/tweet/?text=${this.props.quote}-${this.props.author}`}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <button
          id="new-quote"
          className="button"
          onClick={this.props.handleClick}
        >
          New Quote
        </button>
      </div>
    );
  }
}
export default Buttons;
