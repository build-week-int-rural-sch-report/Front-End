import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute'
import Onboarding from './components/Onboarding'
import Issues from './components/Issues'

class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
    <div className="App">
      <PrivateRoute path='/' exact component= {Issues} />
      <Route path='/login' exact component={Onboarding} />
    </div>
    );
  }
}

export default App;
