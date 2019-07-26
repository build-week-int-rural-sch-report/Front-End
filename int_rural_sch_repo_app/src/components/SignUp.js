import React from 'react'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state= {
            username: '', // required/string/unique
            password: '', // required/string
            name: '',     // required/string
            role_id: 1,  // required/number
            org_id: '',  // required/number
            email: '',  // optional/string/unique
            phone: '' // optional/string/unique
          }
    }
    
    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h2>Create a New Account</h2>
                <form>
                    username:<input type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.changeHandler} /> <br />
                    password:<input type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.changeHandler} /> <br />
                    name: <input type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.changeHandler} /> <br />
                    
                    role_id:<select name='role_id' value={this.state.role_id} onChange={this.changeHandler}>
						        <option value="1">1</option>
						    </select> <br />
                    org_id: <select name='org_id' value={this.state.org_id} onChange={this.changeHandler}>
						        <option value="1">1</option>
						    </select> <br />
                    
                    email:<input type='text'
                        name='email'
                        placeholder='optional'
                        value={this.state.email}
                        onChange={this.changeHandler} /> <br />
                    phone:<input type='text'
                        name='phone'
                        placeholder='optional'
                        value={this.state.phone}
                        onChange={this.changeHandler} /> <br />
                    <button>SignUp</button>
                </form>
            </div>
        )
    }
}

export default SignUp;