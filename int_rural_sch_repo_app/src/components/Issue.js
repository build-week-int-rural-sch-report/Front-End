import React from 'react'
import { Link } from 'react-router-dom'

function Issue(props){
    return(
        <Link to={`/issues/${props.issue.id}`}>
           <h3>id: {props.issue.id}</h3>
           <p><strong> name: {props.issue.name}</strong></p>
           <p>comments: {props.issue.comments}</p>
           <h3>org_id: {props.issue.org_id}</h3>
           <p><strong>org_name: {props.issue.org_name}</strong></p>
           <p><strong>status_name: {props.issue.status_name}</strong><button>Edit</button></p>
           <h3>created_by: {props.issue.created_by}</h3>
           <h6>created_at: {props.issue.created_at}</h6>
           <h4>updated_by: {props.issue.updated_by}</h4>
           <h6> updated_at: {props.issue.updated_at}</h6>
        </Link>
    )
}

    export default Issue;
   
    
    
    
    
    
    
    
    
   