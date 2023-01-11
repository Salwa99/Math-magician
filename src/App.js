import React from 'react';
import MathMagicianApp from './components/Calculator';
import './index.css';
// eslint-disable-next-line
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MathMagicianApp />;
  }
}

export default App;
