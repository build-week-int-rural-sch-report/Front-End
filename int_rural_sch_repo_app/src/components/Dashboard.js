import React from 'react'
import {Route, withRouter, NavLink} from 'react-router-dom'
import Issues from './Issues'
import IssueByID from './IssueByID'
import IssuesByOrg from './IssuesByOrg'
import TeacherAtt from './TeacherAtt'
import Welcompage from './Welcompage'
import {  Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            org_id: '',
            dropdownOpen: false
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
    
    toggle = () => {
        this.setState({
          dropdownOpen: true
        });
      }

    render(){
        return(
            <div>
                <nav className='Navigation'>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="info">
                   Menu
                </DropdownToggle> 
                <DropdownMenu className='DashbordMenu'>
                    <DropdownItem>
                        <NavLink to='/issues' activeClassName="active" className='DashboardLink'>Issues Log</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                         <NavLink to={`/issues/org/${this.state.org_id}`} activeClassName="active" className='DashboardLink' >Issues By Org_Id </NavLink>
                         <input  type='text' className='Org_Id'
                           name='name'
                           value={this.state.org_id}
                           onChange={this.changeHandler}  />
                    </DropdownItem>
                    <DropdownItem>
                         <NavLink to='/teacherAtt' activeClassName="active" className='DashboardLink'>Teacher attendance</NavLink>
                    </DropdownItem> 
                    <DropdownItem onClick={this.logout} className='LogoutButt'>
                        Logout
                    </DropdownItem> 
                </DropdownMenu>
                </Dropdown>
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