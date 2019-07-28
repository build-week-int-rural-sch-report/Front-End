import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    constructor(){
        super();
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
             .then((res)=>{localStorage.setItem("token", res.data.token)})
             .catch((err) => {console.log(err)})
    }

    render() {
        return (
            <div>
              <form onSubmit={this.Login}>
                <input type='text' 
                       name='username' 
                       placeholder='username' 
                       value={this.state.username} 
                       onChange={this.changeHandler} />
                <input type='password' 
                       name='password' 
                       placeholder='password' 
                       value={this.state.password} 
                       onChange={this.changeHandler} />
                <button type='submit'>SignIn</button>
              </form>
            </div>
        )
    }
}

export default Login;