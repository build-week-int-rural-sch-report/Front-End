import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import {Route, NavLink} from 'react-router-dom'

function Onboarding(props) {
return (
    <div className='Onboarding'>
        <NavLink to='/login/signin' className='signinup'>Signin </NavLink>
        <NavLink to='/login/signup' className='signinup'>Signup </NavLink>
        <Route exact path='/login/signin' component={Login} />
        <Route exact path='/login/signup' component={SignUp } />
    </div>
)
}

export default Onboarding;