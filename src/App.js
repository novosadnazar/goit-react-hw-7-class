import React from "react";
import style from "./App.module.css";

export default class App extends React.Component {

  static defaultProps = {
    initialState: 0,
  };


  state = {
    value: this.props.initialState,
  };


  handlePlus = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleMinus = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className={style.box}>
        <span className={style.value}>{this.state.value}</span>
        <div className={style.wrapper}>
          <button
            onClick={this.handlePlus} 
            type="button"
            className={style.btn}
          >
            Збільшити
          </button>
          <button
            onClick={this.handleMinus}
            type="button"
            className={style.btn}
          >
            Зменшити
          </button>
        </div>
      </div>
    );
  }
}
