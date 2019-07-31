import React from 'react'
import {Route, withRouter, NavLink} from 'react-router-dom'
import Issues from './Issues'
import IssueByID from './IssueByID'
import IssuesByOrg from './IssuesByOrg'
import TeacherAtt from './TeacherAtt'

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state={
            Org_id: 2,
        }
    }
    // changeHandler = (e)=>{
    //     e.preventDefault()
    //     this.setState({Org_id: e.target.value})
    // }
    changeHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
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
                    <NavLink to={`/issues/org/2`} >Issues By Org_Id </NavLink>
                    <input  type='text'
                           name='name'
                           value={this.state.name}
                           onChange={this.changeHandler}  />
                    <NavLink to='/teacherAtt'>Teacher attendance</NavLink>
                    <button type='button' onClick={this.logout} >Logout</button>
                </nav>
               
                <Route exact path ='/' component={Issues} />
                <Route exact path = '/teacherAtt' render={()=><TeacherAtt />} />
                <Route exaxt path= '/issues/:id' render={(props) => <IssueByID {...props} />} />  
                <Route exact path= '/issues/org/:org_id' render={(props) => <IssuesByOrg {...props} />} />  
            </div>
        )
    }
    
}

export default  withRouter(Dashboard);