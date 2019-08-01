import React from 'react'
import axios from 'axios'
import { Table } from 'reactstrap'


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
                             <Table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Teacher Name</th>
                                    <th>TimeIn</th>
                                    <th>TimeOut</th>
                                    <th>Tmm</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td>{teacher.id}</td>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.date}</td>
                                    <td>{teacher.in}</td>
                                    <td>{teacher.out}</td>
                                    <td>{teacher.tmm}</td>
                                </tr>
                                
                                </tbody>
                              </Table>
                            {/* <h3>{`id: ${teacher.id}`}</h3>
                            <p>{`name: ${teacher.name}`}</p>
                            <p>{`date: ${teacher.date}`}</p>
                            <p>{`in: ${teacher.in}`}</p>
                            <p>{`out: ${teacher.out}`}</p>
                            <p>{`tmm: ${teacher.tmm}`}</p> */}
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default TeacherAtt
