import React from 'react'
import axios from 'axios'

class IssuesByOrg extends React.Component {
    constructor(){
        super()
        this.state = {
            issuesByOrg:[]
        }
    }

    componentDidMount() {
        const org_id = this.props.match.params.org_id
        console.log(org_id)
        const headers = {
			Authorization: localStorage.getItem('token'),
		}
        axios.get(`https://irsr-be-dev.herokuapp.com/issues/org/${org_id}`, {headers})
          .then(res => {this.setState({ issuesByOrg: res.data })})
          .catch(err => {console.log(err)}) 
      }
    
     
    render(){
        if (!this.state.issuesByOrg) {
            return <div>Loading issues by org...</div>;
          }
        return(
            <div>
            {this.state.issuesByOrg.map((issue, index)=>{return (
            <div key={index}>
               <h3>id: {issue.id}</h3>
               <p><strong> name: {issue.name}</strong></p>
               <p>comments: {issue.comments}</p>
               <h3>org_id: {issue.org_id}</h3>
               <p><strong>org_name: {issue.org_name}</strong></p>
               <p><strong>status_id: {issue.status_id}</strong></p>
               <p><strong>status_name: {issue.status_name}</strong></p>
               <h3>created_by: {issue.created_by}</h3>
               <h6>created_at: {issue.created_at}</h6>
               <h4>updated_by: {issue.updated_by}</h4>
               <h6>updated_at: {issue.updated_at}</h6>
            </div>
            )})}
            </div>
            
        )
    }
}

export default IssuesByOrg;