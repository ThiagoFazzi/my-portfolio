import React from 'react'
import Project from './Project/Project'

const projects = (props) => {
  <>
    {props.projects(project => {
      <Project 
        images={project.images} 
        title={project.title} 
        description={project.description} />
    })}
  </>
}

export default projects