import React from 'react'
import { Link, withRouter} from 'react-router-dom'
import axios from  'axios'
import { Card, CardBody,CardHeader, Button, CardTitle, CardText } from 'reactstrap';

class Issue extends React.Component {
    
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
        
        <Link to={`/issues/${this.props.issue.id}`} className='IssueLink'>
            <Card className='IssueCard'>
                <CardBody> 
                    <CardHeader>id: {this.props.issue.id}</CardHeader>
                    <CardTitle>name: {this.props.issue.name}</CardTitle>  
                    <CardText>comments: {this.props.issue.comments}</CardText>
                    <h6>org_id: {this.props.issue.org_id}</h6>
                    <p><strong>org_name: {this.props.issue.org_name}</strong></p>
                    <p><strong>status_name: {this.props.issue.status_name}</strong></p>
                    <h5>created_by: {this.props.issue.created_by}</h5>
                    <CardText><small>created_at: {this.props.issue.created_at}</small> </CardText>
                    <h5>updated_by: {this.props.issue.updated_by}</h5>
                    <CardText><small>updated_at: {this.props.issue.updated_at}</small> </CardText>
                    <Button type='button' onClick={this.deleteIssue}>Delete Issue</Button>
                </CardBody>
            </Card>
        </Link>
        
    )
 }
}

    export default withRouter(Issue);
   
    
    
    
    
    
    
    
    
   