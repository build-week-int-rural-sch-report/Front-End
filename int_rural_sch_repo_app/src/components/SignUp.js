import react from 'react'

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
            phone: '' // optional/string/unique
          }
    }

    render() {
        return (
            <div>>
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
                    <input type='text'
                        name='name'
                        placeholder='name'
                        value={this.state.name}
                        onChange={} />
                    <input type='text'
                        name='role_id'
                        placeholder='role_id'
                        value={this.state.role_id}
                        onChange={} />
                    <input type='text'
                        name='org_id'
                        placeholder='org_id'
                        value={this.state.org_id}
                        onChange={} />
                    <input type='text'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={} />
                    <input type='text'
                        name='phone'
                        placeholder='phone'
                        value={this.state.phone}
                        onChange={} />
                    <button>SignIn</button>
                </form>
            </div>
        )
    }
}

export default SignUp;