import React from 'react'
import { Link, withRouter} from 'react-router-dom'
import axios from  'axios'

class Issue extends React.Component {
     constructor(props){
         super(props)
     }

    deleteIssue = (e) => {
        e.preventDefault()
    
        const id = this.props.issue.id
        console.log(id)
        const headers = {
			Authorization: localStorage.getItem('token'),
		}
    
        axios.delete(`https://irsr-be-dev.herokuapp.com/issues/${id}`, {headers})
            .then((res) => {
    
                this.props.updateIssues(res.data)
                this.props.history.push('/')
            })
            .catch((err) => {
               console.log(err)
            })
    }
   render(){
       
    return(
        <Link to={`/issues/${this.props.issue.id}`}>
           <h3>id: {this.props.issue.id}</h3>
           <p><strong> name: {this.props.issue.name}</strong></p>
           <p>comments: {this.props.issue.comments}</p>
           <h3>org_id: {this.props.issue.org_id}</h3>
           <p><strong>org_name: {this.props.issue.org_name}</strong></p>
           <p><strong>status_name: {this.props.issue.status_name}</strong><button>Edit</button></p>
           <h3>created_by: {this.props.issue.created_by}</h3>
           <h6>created_at: {this.props.issue.created_at}</h6>
           <h4>updated_by: {this.props.issue.updated_by}</h4>
           <h6> updated_at: {this.props.issue.updated_at}</h6>
           <button type='button' onClick={this.deleteIssue}>Delete Issue</button>
        </Link>
    )
 }
}

    export default withRouter(Issue);
   
    
    
    
    
    
    
    
    
   