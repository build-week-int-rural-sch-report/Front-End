import axios from 'axios'

// action types


export const SIGHNUP_START = 'SIGHNUP_START'
export const SIGHNUP_SUCCESS = 'SIGHNUP_SUCCESS'
export const SIGHNUP_FAILED = 'SIGHNUP_FAILED'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const GET_ISSUES_START = 'GET_ISSUES_START'
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS'
export const GET_ISSUES_FAILED = 'GET_ISSUES_FAILED'



//action creators

export const postSignUp = () => dispatch => {
	dispatch({type: SIGHNUP_START})
  
 	axios.post('https://irsr-be-dev.herokuapp.com/auth/register')
	.then((res) => dispatch({ type: SIGHNUP_SUCCESS, payload: res.data }))
	.catch((err)=> dispatch({type: SIGHNUP_FAILED, payload: err.response.data }));
  
}