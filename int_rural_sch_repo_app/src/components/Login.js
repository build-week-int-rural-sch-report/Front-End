import React from 'react'

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username : '',
            password : ''
        }
    }

    render() {
        return (
            <div>
              <form>
                <input type='text' 
                       name='username' 
                       placeholder='username' 
                       value={this.state.username} 
                       onChange={} />
                <input type='password' 
                       name='password' 
                       placeholder='password' 
                       value={this.state.password} 
                       onChange={} />
                <button>SignIn</button>
              </form>
            </div>
        )
    }
}

export default Login;