import React from 'react'
import solar from '../img/solarpower.jpg'
import relaxing from '../img/studentrelaxing.jpg'
import students from '../img/students.jpg'
import techno from '../img/technology.jpg'

const Welcompage = () => {
    return (
        <div className='welcome'>
            <h1>Welcome to International Rular School Report Dashboard</h1>
            <img src={students} alt='Students' className='students' />
            <div>
                <img src={solar} alt='solar panel' />
                <p>Some of the schools used solar panel to generate power and supply electricity for the schools. Which reduce our schools dependency on utility providers and as well as lower the school bill.</p>
            </div>
            <div>
                <img src={techno} alt='computers' />
                <p>Computers and laptops are provided for 90% of the rural schools . Rural students benefit from the connectedness of technology. By allowing for an online network of people from almost anywhere in the world, technology opens up a world of potential for students to network and gain valuable friendships. </p>
            </div>
            <div>
                <img src={relaxing} alt='student relaxing' />
                <p>The purpose of the trip is usually observation for education, non-experimental research or to provide students with experiences outside their everyday activities, such as going camping with teachers and their classmates.</p>
            </div>
            
        </div>
    )
}

export default Welcompage; 