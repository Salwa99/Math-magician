import { useState } from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line
export default function MathMagicianApp() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnEventHandler = (event) => {
    const result = calculate(state, event.target.textContent);
    setState((state0) => ({
      ...state0,
      ...result,
    }));
  };

  const { total, next } = state;

  return (
    <div className="App">
      <div className="title-math">
        <h2>Let&apos;s do some math!</h2>
      </div>

      <div className="calculator">
        <div className="result">
          {next || total || 0}
        </div>

        <div className="wrapper">

          <div className="main-cal">

            <div className="top-cal">
              <button type="button" onClick={btnEventHandler}>AC</button>
              <button type="button" onClick={btnEventHandler}>+/-</button>
              <button type="button" onClick={btnEventHandler}>%</button>
            </div>

            <div className="digits-numbers">
              <button type="button" onClick={btnEventHandler}>7</button>
              <button type="button" onClick={btnEventHandler}>8</button>
              <button type="button" onClick={btnEventHandler}>9</button>
              <button type="button" onClick={btnEventHandler}>4</button>
              <button type="button" onClick={btnEventHandler}>5</button>
              <button type="button" onClick={btnEventHandler}>6</button>
              <button type="button" onClick={btnEventHandler}>1</button>
              <button type="button" onClick={btnEventHandler}>2</button>
              <button type="button" onClick={btnEventHandler}>3</button>
            </div>
            <div className="bottom-cal">
              <button type="button" onClick={btnEventHandler}>.</button>
              <button type="button" className="btn0" onClick={btnEventHandler}>0</button>
            </div>
          </div>

          <div className="operators">
            <button type="button" onClick={btnEventHandler}>÷</button>
            <button type="button" onClick={btnEventHandler}>x</button>
            <button type="button" onClick={btnEventHandler}>-</button>
            <button type="button" onClick={btnEventHandler}>+</button>
            <button type="button" onClick={btnEventHandler}>=</button>
          </div>
        </div>

      </div>
    </div>
  );
}
