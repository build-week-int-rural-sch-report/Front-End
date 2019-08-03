import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
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
             .then((res)=>{localStorage.setItem('token', res.data.token)})
             .then(() => {this.props.history.push('/')})
             .catch((err) => {console.log(err)})
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
        
                </Jumbotron>
            </div>
        )
    }
}

export default withRouter(Login);