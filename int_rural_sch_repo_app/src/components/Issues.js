import React from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'
import Issue from './Issue'

class Issues extends React.Component {
    constructor(){
        super()
        this.state={
            issuesData: [],
            name: '',
            status_id: '',
            comments: '',
            org_id: '',
            issue_status: []
        }
    }
    componentDidMount(){
        const headers = {
			Authorization: localStorage.getItem('token'),
		}
        axios.get('https://irsr-be-dev.herokuapp.com/issues',{headers})
             .then((res) => {this.setState({issuesData: res.data})})
             .catch(() => {console.log( 'no data exist')})

        axios.get('https://irsr-be-dev.herokuapp.com/public/issue-status')
             .then(res => {this.setState({issue_status: res.data})})
             .catch(err => {console.log(err)})

    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const headers = {
           // "Content-Type": "application/json",
			Authorization: localStorage.getItem('token'),
        }
        const {name, status_id, comments, org_id} = this.state
        const newIssue = {name, status_id, comments, org_id }
         console.log('headers:', headers, 'newissue:', newIssue)
       
        axios.post('https://irsr-be-dev.herokuapp.com/issues', newIssue, {headers})
             .then((res)=>{this.setState({issuesData: res.data})})
             .catch(err => {console.log(err)})
        this.setState({ 
            name: '',
            status_id: '',
            comments: '',
            org_id: ''
                   })
        
    }

    logout = (e) => {
		e.preventDefault()

		localStorage.removeItem('token')
		this.props.history.push('/login')
	}

    render(){
        return(<div>
                 <button type='button' onClick={this.logout} >Logout</button>
                 
                 {this.state.issuesData.map((issue, index) => {return <Issue key={index} issue={issue} />})}
                  <form onSubmit={this.submitHandler}>
                  Issue's name :<input type='text'
                           name='name'
                           value={this.state.name}
                           onChange={this.changeHandler} /> <br />
                    status_name :<select name='status_id' value={this.state.status_id} onChange={this.changeHandler}>
                               {this.state.issue_status.map((status)=>{return <option key={status.id}value={status.id}>{status.name}</option>})} 
						    </select> <br />
                    comments :<input type='text'
                           name='comments'
                           placeholder='optional'
                           value={this.state.comments}
                           onChange={this.changeHandler} /> <br />
                    org_id :<input type='text'
                           name='org_id'
                           placeholder='optional'
                           value={this.state.org_id}
                           onChange={this.changeHandler} /> <br />          
                    <button type='submit'>Add Issue</button>
                  </form>
                  <Link to={`/issues/org/${this.state.org_id}`}>See issues by organization</Link>
               </div> 
        )
    }
}
export default withRouter(Issues)