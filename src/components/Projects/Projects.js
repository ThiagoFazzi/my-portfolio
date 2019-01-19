import React from 'react'
import classes from './Projects.module.css'
import Project from './Project/Project'

const projects = (props) => (
    <div className={classes.Projects}>
    {props.projects.map(project => 
      <Project 
        title={project.title} 
        key={project.id} 
        description={project.description} 
        image={project.image}
        images={project.images} />
    )}
    </div>
)

export default projects