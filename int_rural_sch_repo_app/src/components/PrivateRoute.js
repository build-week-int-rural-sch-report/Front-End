import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function(props) {
	const {
		component: Component, // rename "component" to "Component"
		...rest // everything except "component"
	} = props

	// the rest variable === { exact: true, path: "/" }
	
	return (
		<Route {...rest} render={() => {
			const token = localStorage.getItem('token')

			return token
				? <Component />
				: <Redirect to='/login' />
		}} />
	)
}