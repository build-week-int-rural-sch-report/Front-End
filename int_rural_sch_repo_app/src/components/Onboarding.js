import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import {Route, NavLink} from 'react-router-dom'

function Onboarding(props) {
return (
    <div className='Onboarding'>
        <NavLink to='/login/signin'>signin </NavLink>
        <NavLink to='/login/login'>signup </NavLink>
        <Route exact path='/login/signin' component={Login} />
        <Route exact path='/login/login' component={SignUp } />
    </div>
)
}

export default Onboarding;