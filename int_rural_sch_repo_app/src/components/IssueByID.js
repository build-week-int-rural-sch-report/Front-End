import React from 'react'
import axios from 'axios'

class IssueByID extends React.Component {
    constructor(){
        super()
        this.state = {
            issueByID: null // since the return is object
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        const headers = {
			Authorization: localStorage.getItem('token'),
		}
        axios.get(`https://irsr-be-dev.herokuapp.com/issues/${id}`, {headers})
          .then(res => {this.setState({ issueByID: res.data })})
          .catch(err => {console.log(err)}) 
      }
    
     
    render(){
        if (!this.state.issueByID) {
            return <div>Loading issue by Id...</div>;
          }
        return(
            <div>
               <h3>id: {this.state.issueByID.id}</h3>
               <p><strong> name: {this.state.issueByID.name}</strong></p>
               <p>comments: {this.state.issueByID.comments}</p>
               <h3>org_id: {this.state.issueByID.org_id}</h3>
               <p><strong>org_name: {this.state.issueByID.org_name}</strong></p>
               <p><strong>status_name: {this.state.issueByID.status_name}</strong></p>
               <h3>created_by: {this.state.issueByID.created_by}</h3>
               <h6>created_at: {this.state.issueByID.created_at}</h6>
               <h4>updated_by: {this.state.issueByID.updated_by}</h4>
               <h6> updated_at: {this.state.issueByID.updated_at}</h6>
            </div>
        )
    }
}

export default IssueByID;