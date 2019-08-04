import React from 'react'
import solar from '../img/solarpower.jpg'
import relaxing from '../img/studentrelaxing.jpg'
import students from '../img/students.jpg'
import techno from '../img/technology.jpg'

const Welcompage = () => {
    const name = localStorage.getItem('name')
    const org_name = localStorage.getItem('org_name')
    const role_name = localStorage.getItem('role_name')
    return (
        <div className='welcome'>
            <h4>Hello {name}, Welcome to International Rular School Report Dashboard</h4>
            <div className='Orgrol'>
                <h6>{'Organization name: '+ org_name}</h6>
                <h6>{'Role name        : '+ role_name}</h6>
            </div>
                <img src={students} alt='Students' className='students' />
            <div className='Welcomediv'>
                <img src={solar} alt='solar panel' className='WelcomeImage' />
                <p className='WelcomeP'>Some of the schools used solar panel to generate power and supply electricity for the schools. Which reduce our schools dependency on utility providers and as well as lower the school bill.</p>
            </div>
            <div className='WelcomedivComp'>
                <p className='WelcomeP'>Computers and laptops are provided for 90% of the rural schools . Rural students benefit from the connectedness of technology. By allowing for an online network of people from almost anywhere in the world, technology opens up a world of potential for students to network and gain valuable friendships. </p>
                <img src={techno} alt='computers' className='WelcomeImage' />
            </div>
            <div className='Welcomediv'>
                <img src={relaxing} alt='student relaxing' className='WelcomeImage' />
                <p className='WelcomeP'>The purpose of the filed trip is usually observation for education, non-experimental research or to provide students with experiences outside their everyday activities, such as going camping with teachers and their classmates.</p>
            </div>
            
        </div>
    )
}

export default Welcompage; 