import React from 'react'

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username : '',
            password : ''
        }
    }
    
    changeHandler(e){
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        return (
            <div>
              <form>
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
                <button>SignIn</button>
              </form>
            </div>
        )
    }
}

export default Login;