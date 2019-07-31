import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute'
import Onboarding from './components/Onboarding'
import Dashboard from './components/Dashboard'


class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
    <div className="App">
      <PrivateRoute  path='/'  component={Dashboard} />
      <Route exact path='/login'  component={Onboarding} />
      
    </div>
    );
  }
}

export default App;
