import React from 'react'
import axios from 'axios'
import Issue from './Issue'
import { Jumbotron, Form, Input, Button,  Fade } from 'reactstrap';

class Issues extends React.Component {
    constructor(){
        super()
        this.state={
            issuesData: [],
            name: '',
            status_id: '',
            comments: '',
            org_id: '',
            issue_status: [],
            fadeIn: true 
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

    updateIssues = (updatedIssues)=> {this.setState({issuesData: updatedIssues});}

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const headers = {
           
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

    toggle = () => {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

    render(){
        return(<div className='Issues'>
                 
                 {this.state.issuesData.map((issue, index) => {return <Issue key={index} issue={issue} updateIssues={this.updateIssues} />})}
                 <Button color="primary" onClick={this.toggle}>Toggle AddIssue</Button>
                 <Fade in={this.state.fadeIn} tag="h5" >
                    <Jumbotron className='AddIssue'>
                        <Form onSubmit={this.submitHandler}>
                            Issue's name :<Input type='text'
                                name='name'
                                value={this.state.name}
                                onChange={this.changeHandler} /> <br />
                            status_name :<Input type='select' name='status_id' value={this.state.status_id} onChange={this.changeHandler}>
                                    {this.state.issue_status.map((status)=>{return <option key={status.id}value={status.id}>{status.name}</option>})} 
                                    </Input> <br />
                            comments :<Input type='text'
                                name='comments'
                                value={this.state.comments}
                                onChange={this.changeHandler} /> <br />
                            org_id :<Input type='text'
                                name='org_id'
                                value={this.state.org_id}
                                onChange={this.changeHandler} /> <br />          
                            <Button outline color="success" type='submit'>Add Issue</Button>
                        </Form>
                    </Jumbotron>
                 </Fade>
               </div> 
        )
    }
}
export default Issues