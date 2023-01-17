import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MathMagicianApp from './components/pages/Calculator';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import './index.css';
// eslint-disable-next-line
class App extends React.Component {

  render() {
    return (
      <>
        <nav>
          <div className="header">
            <h1 className="title">Math Magicians</h1>

            <ul>
              <li><Link to="/" className="no-border">Home</Link></li>
              <li><Link to="/Calculator">Calculator</Link></li>
              <li><Link to="/Quote">Quote</Link></li>
            </ul>
          </div>
        </nav>
        <div className="footer"><p>Math Magicians © 2023</p></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<MathMagicianApp />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
