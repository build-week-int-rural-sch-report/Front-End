import React from 'react'
import {Route, withRouter, NavLink} from 'react-router-dom'
import Issues from './Issues'
import IssueByID from './IssueByID'
import IssuesByOrg from './IssuesByOrg'
import TeacherAtt from './TeacherAtt'

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            org_id: ''
        }
    }
    changeHandler = (e)=>{
        e.preventDefault()
        this.setState({org_id: e.target.value})
    }
     
    logout = (e) => {
		e.preventDefault()

		localStorage.removeItem('token')
		this.props.history.push('/login')
	}

    render(){
        return(
            <div>
                <nav>
                    <NavLink to='/' >Issues Log</NavLink>
                    <NavLink to={`/issues/org/${this.state.org_id}`} >Issues By Org_Id </NavLink>
                    <input  type='text'
                           name='name'
                           value={this.state.org_id}
                           onChange={this.changeHandler}  />
                    <NavLink to='/teacherAtt'>Teacher attendance</NavLink>
                    <button type='button' onClick={this.logout} >Logout</button>
                </nav>
               
                <Route exact path ='/' component={Issues} />
                <Route exact path = '/teacherAtt' render={()=><TeacherAtt />} />
                <Route path= '/issues/:id' render={(props) => <IssueByID {...props} />} />  
                <Route path= '/issues/org/:org_id' render={(props) => <IssuesByOrg {...props} />} />  
            </div>
        )
    }
    
}

export default  withRouter(Dashboard);