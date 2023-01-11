import React from 'react';
import calculate from './logic/calculate';
// eslint-disable-next-line
export default class MathMagicianApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  btnEventHandler = (event) => {
    const result = calculate(this.state, event.target.textContent);
    this.setState((state0) => ({
      ...state0,
      ...result,
    }));
  }

  render() {
    const { total, next } = this.state;

    return (
      <div className="App">

        <div className="calculator">
          <div className="result">
            {next || total || 0}
          </div>

          <div className="wrapper">

            <div className="main-cal">

              <div className="top-cal">
                <button type="button" onClick={this.btnEventHandler}>AC</button>
                <button type="button" onClick={this.btnEventHandler}>+/-</button>
                <button type="button" onClick={this.btnEventHandler}>%</button>
              </div>

              <div className="digits-numbers">
                <button type="button" onClick={this.btnEventHandler}>7</button>
                <button type="button" onClick={this.btnEventHandler}>8</button>
                <button type="button" onClick={this.btnEventHandler}>9</button>
                <button type="button" onClick={this.btnEventHandler}>4</button>
                <button type="button" onClick={this.btnEventHandler}>5</button>
                <button type="button" onClick={this.btnEventHandler}>6</button>
                <button type="button" onClick={this.btnEventHandler}>1</button>
                <button type="button" onClick={this.btnEventHandler}>2</button>
                <button type="button" onClick={this.btnEventHandler}>3</button>
              </div>
              <div className="bottom-cal">
                <button type="button" onClick={this.btnEventHandler}>.</button>
                <button type="button" className="btn0" onClick={this.btnEventHandler}>0</button>
              </div>
            </div>

            <div className="operators">
              <button type="button" onClick={this.btnEventHandler}>÷</button>
              <button type="button" onClick={this.btnEventHandler}>x</button>
              <button type="button" onClick={this.btnEventHandler}>-</button>
              <button type="button" onClick={this.btnEventHandler}>+</button>
              <button type="button" onClick={this.btnEventHandler}>=</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
