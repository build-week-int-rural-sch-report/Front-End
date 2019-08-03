import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            error: ''
        }
    }
    
    changeHandler= (e) => {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
    }

    Login = (e) => {
        const {username, password} = this.state
        const login = {username, password}
        e.preventDefault()
        axios.post('https://irsr-be-dev.herokuapp.com/auth/login', login)
             .then((res)=>{
                 localStorage.setItem('name', username)
                 localStorage.setItem('token', res.data.token)
                 localStorage.setItem('org_name', res.data.org_roles[0].org_name)
                 localStorage.setItem('role_name', res.data.org_roles[0].roles[0].role_name)
                })
             .then(() => {this.props.history.push('/')})
             .catch((err) => {
                 this.setState({error : 'The username or password you’ve entered doesn’t match any account.'})
                 console.log(err)
                })
    }

    render() {
        return (
            <div>
                <Jumbotron className='Login'>
                    <h3>Sign in to IRSR</h3> 
                    <Form onSubmit={this.Login}>
                      <FormGroup>
                        <Input type='text' 
                            name='username' 
                            placeholder='username' 
                            value={this.state.username} 
                            onChange={this.changeHandler} /> <br />
                        <Input type='password' 
                            name='password' 
                            placeholder='password' 
                            value={this.state.password} 
                            onChange={this.changeHandler} /><br />
                        <Button color="primary" type='submit' className='Loginbutton'>Sign In</Button>
                      </FormGroup>
                    </Form>
                    <h6 className='errormessage'>{this.state.error}</h6>
                </Jumbotron>
            </div>
        )
    }
}

export default withRouter(Login);