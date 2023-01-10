import React from 'react';
// eslint-disable-next-line
export default class MathMagicianApp extends React.Component {
  render() {
    return (
      <div className="App">

        <div className="calculator">
          <div className="result">
            0
          </div>

          <div className="wrapper">

            <div className='main-cal'>

                <div className="top-cal">
                <button type="button">AC</button>
                <button type="button">+/-</button>
                <button type="button">%</button>
                </div>

                <div className="digits-numbers">
                    <button type="button">7</button>
                    <button type="button">8</button>
                    <button type="button">9</button>
                    <button type="button">4</button>
                    <button type="button">5</button>
                    <button type="button">6</button>
                    <button type="button">1</button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                </div>
                <div className="bottom-cal">
                    <button type="button">.</button>
                    <button type="button" className='btn0'>0</button>
                </div>
            </div>

            <div className="operators">
              <button type="button">÷</button>
              <button type="button">x</button>
              <button type="button">-</button>
              <button type="button">+</button>
              <button type="button">=</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
