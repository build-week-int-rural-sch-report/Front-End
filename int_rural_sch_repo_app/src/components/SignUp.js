import React from 'react'
import axios from 'axios'
import { Jumbotron, Form, Input, Button } from 'reactstrap'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state= {
            username: '', // required/string/unique
            password: '', // required/string
            name: '',     // required/string
            role_id: '',  // required/number
            org_id: '',  // required/number
            email: '',  // optional/string/unique
            phone: '', // optional/string/unique
            orgData: [],
            rolesData:[]
          }
    }
    
    componentDidMount(){
        axios.get ('https://irsr-be-dev.herokuapp.com/public/orgs')
        .then(res =>  {this.setState({orgData: res.data})})
        .catch(err => {console.log('Error:', err)})

        axios.get ('https://irsr-be-dev.herokuapp.com/public/roles')
        .then(res =>  {this.setState({rolesData: res.data})})
        .catch(err => {console.log('Error:', err)})
      }

    signUp = (e)=> {
        e.preventDefault();
        const {username, password, name, role_id, org_id, email, phone} = this.state
        const newUser = {username, password, name, role_id, org_id, email, phone}
        axios.post('https://irsr-be-dev.herokuapp.com/auth/register', newUser)
             .then((res)=>{
                 console.log('res:', res)
                 localStorage.setItem('token', res.data.token)})
             .catch(err => {console.log(err)})
        this.setState({
            username: '', 
            password: '', 
            name: '',     
            role_id: '',  
            org_id: '',  
            email: '',  
            phone: ''
              });
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
              <Jumbotron className='Signup'>
                <h2>Create a New Account</h2>
                <Form onSubmit={this.signUp}>
                    username:<Input type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.changeHandler} />
                    password:<Input type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.changeHandler} />
                    name: <Input type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.changeHandler} />
                    
                    role_name:<Input type="select" name='role_id' value={this.state.role_id} onChange={this.changeHandler}>
                               {this.state.rolesData.map((role)=>{return <option key={role.id}value={role.id}>{role.name}</option>})} 
						    </Input>
                    org_name: <Input type="select" name='org_id' value={this.state.org_id} onChange={this.changeHandler}>
						       {this.state.orgData.map((org)=>{return <option key={org.id}value={org.id}>{org.name}</option>})} 
						    </Input>
                    
                    email:<Input type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.changeHandler} />
                    phone:<Input type='text'
                        name='phone'
                        value={this.state.phone}
                        onChange={this.changeHandler} /> <br />
                    <Button color="success" size="lg" type='submit' className='SignupButt'>Sign Up</Button>
                </Form>
              </Jumbotron>
            </div>
        )
    }
}

export default SignUp;