import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute'
import Onboarding from './components/Onboarding'
import Issues from './components/Issues'
import IssueByID from './components/IssueByID'
import IssuesByOrg from './components/IssuesByOrg'

class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
    <div className="App">
      <PrivateRoute exact path='/'  component={Issues} />
      <Route exact path='/login'  component={Onboarding} />
      <Route path= '/issues/:id' render={(props) => <IssueByID {...props} />} />  
      <Route path= '/issues/org/:org_id' render={(props) => <IssuesByOrg {...props} />} />  
    </div>
    );
  }
}

export default App;
