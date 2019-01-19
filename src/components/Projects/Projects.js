import React from 'react'
import classes from './Projects.module.css'
import Project from './Project/Project'
import { Link } from 'react-router-dom'

const projects = (props) => (
    <div className={classes.Projects}>
    {props.projects.map(project => 
      <Link to={{pathname: `/projects/:${project.id}`}} key={project.id}>
        <Project 
            title={project.title}  
            description={project.description} 
            image={project.image}
            images={project.images} />
      </Link>
    )}
    </div>
)

export default projects