import React from 'react';

import './App.css';
import LoginSignup from './components/LoginSignup'

class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
    <div className="App">
      <LoginSignup />
    </div>
    );
  }
}

export default App;
