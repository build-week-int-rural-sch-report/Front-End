import React from 'react'
import {Route, withRouter, NavLink} from 'react-router-dom'
import Issues from './Issues'
import IssueByID from './IssueByID'
import IssuesByOrg from './IssuesByOrg'
import TeacherAtt from './TeacherAtt'
import Welcompage from './Welcompage'
import {  Button } from 'reactstrap';

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
        localStorage.removeItem('name')
        localStorage.removeItem('token')
        localStorage.removeItem('org_name')
        localStorage.removeItem('role_name')
		this.props.history.push('/login')
	}

    render(){
        return(
            <div>
                <nav className='Navigation'>
                    <div className='navDev'>
                        <NavLink to='/issues' activeClassName="active" className='OnbordLink'>Issues Log</NavLink>
                    </div>
                    <div>
                         <NavLink to={`/issues/org/${this.state.org_id}`} activeClassName="active" className='OnbordLink' >Issues By Org_Id </NavLink>
                         <input  type='text' className='Org_Id'
                           name='name'
                           value={this.state.org_id}
                           onChange={this.changeHandler}  />
                    </div>
                    <div>
                         <NavLink to='/teacherAtt' activeClassName="active" className='OnbordLink'>Teacher attendance</NavLink>
                    </div>                   
                    <Button color="danger" type='button' onClick={this.logout} className='LogoutButt'>Logout</Button>
                </nav>
                <Route exact path= '/' component={Welcompage} />
                <Route exact path= '/issues' component={Issues} />
                <Route exact path= '/teacherAtt' render={()=><TeacherAtt />} />
                <Route exact path= '/issues/:id' render={(props) => <IssueByID {...props} />} />  
                <Route exact path= '/issues/org/:org_id' render={(props) => <IssuesByOrg {...props} />} />  
            </div>
        )
    }
    
}

export default  withRouter(Dashboard);