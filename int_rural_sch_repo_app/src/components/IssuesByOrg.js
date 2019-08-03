import React from 'react'
import axios from 'axios'
import { Card, CardBody,CardHeader, CardTitle, CardText } from 'reactstrap';

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
                <Card className='IssueCard'>
                  <CardBody> 
                    <CardHeader>id: {issue.id}</CardHeader>
                    <CardTitle>name: {issue.name}</CardTitle>  
                    <CardText>comments: {issue.comments}</CardText>
                    <h6>org_id: {issue.org_id}</h6>
                    <p><strong>org_name: {issue.org_name}</strong></p>
                    <h6>status_id: {issue.status_id}</h6>
                    <p><strong>status_name: {issue.status_name}</strong></p>
                    <h5>created_by: {issue.created_by}</h5>
                    <CardText><small>created_at: {issue.created_at}</small> </CardText>
                    <h5>updated_by: {issue.updated_by}</h5>
                    <CardText><small>updated_at: {issue.updated_at}</small> </CardText>
                  </CardBody>
                </Card>
            </div>
            )})}
            </div>
            
        )
    }
}

export default IssuesByOrg;