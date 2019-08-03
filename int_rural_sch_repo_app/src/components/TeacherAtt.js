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
            <div className='Teacher'>
                <Table dark size='6'>
                <thead>
                    <tr>
                        
                            <th className='Attend'>ID</th>
                            <th className='Attend'>Teacher Name</th>
                            <th className='Attend'>Date</th>
                            <th className='Attend'>TimeIn</th>
                            <th className='Attend'>TimeOut</th>
                            <th className='Attend'>Tmm</th> 
                    </tr>
                  </thead>
                </Table>
                {this.state.teacherAttendance.sort((a,b)=>a.id-b.id).map((teacher)=>{
                    return (
                        <div key={teacher.id} >
                             <Table hover>
                               <tbody> 
                                <tr>
                                    <td className='Attend'>{teacher.id}</td>
                                    <td className='Attend'>{teacher.name}</td>
                                    <td className='Attend'>{teacher.date}</td>
                                    <td className='Attend'>{teacher.in}</td>
                                    <td className='Attend'>{teacher.out}</td>
                                    <td className='Attend'>{teacher.tmm}</td>
                                </tr>
                                
                               </tbody> 
                              </Table>
                          
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default TeacherAtt
