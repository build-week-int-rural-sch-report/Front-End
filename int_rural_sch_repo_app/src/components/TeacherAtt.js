import React from 'react'
import axios from 'axios'


class TeacherAtt extends React.Component{
    constructor(){
        super()
        this.state ={
            teacherAttendance: []
        }
    }
    componentDidMount(){
        const headers = {
            Authorization: localStorage.getItem('token'),
        }
        axios.get('https://irsr-be-dev.herokuapp.com/teachers-attendance', {headers})
             .then(res => {this.setState({teacherAttendance: res.data})})
             .catch(err => {console.log('Error:', err)})
    }

    render(){
        if (!this.state.teacherAttendance) {
            return <div>Loading teacher attendance...</div>;
          }
        return(
            <div>
                {this.state.teacherAttendance.map((teacher, index)=>{
                    return (
                        <div key={index}>
                            <h3>{`id: ${teacher.id}`}</h3>
                            <p>{`name: ${teacher.name}`}</p>
                            <p>{`date: ${teacher.date}`}</p>
                            <p>{`in: ${teacher.in}`}</p>
                            <p>{`out: ${teacher.out}`}</p>
                            <p>{`tmm: ${teacher.tmm}`}</p>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default TeacherAtt
