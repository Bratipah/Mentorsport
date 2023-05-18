import React from 'react'
import '../../Courses.css'
import {FaCrown} from 'react-icons/fa'
import SectionHead from '../SectionHead'
import { courses } from '../CourseData'
import { Link } from 'react-router-dom';
import CourseCards from '../CourseCards'

const CourseWork = () => {
  const className =""
  return (
    <section className= {`coursework ${className}`}>
        <div className='container coursework_container'>
          <SectionHead icon={<FaCrown/>} title = "Tracks"/>
        </div>
        <div className='coursework_wrapper'>
          {
              courses.map(({id, icon, title, info, path})=>{
                  return (
                    <CourseCards className="courses__course" key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <Link to={path}>Find Courses</Link>
                    </CourseCards>
                  )
              })
          }
        </div>
    </section>
  )
}

export default CourseWork

