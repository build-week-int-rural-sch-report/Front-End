import React from 'react';

import './App.css';
import LoginSignup from './components/LoginSignup'
import Issues from './components/Issues'

class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
    <div className="App">
      <LoginSignup />
      <Issues />
    </div>
    );
  }
}

export default App;
