import React, { Component } from 'react'
import classes from './ListProjects.module.css'
import data from '../../../assets/json/data.json'
import { Link } from 'react-router-dom'

import Project from '../../../components/Projects/Project/Project'

class ListProjects extends Component {

  state = {
    projects: null
  }

  componentDidMount(){
    this.projectsHandler()
  }

  projectsHandler(){
    this.setState({projects: data.projects})
  }

  render(){
    let projects = <p>Loadin Projects ......</p>
    if(this.state.projects){
      projects = this.state.projects.map(project => {
        return(
          <Link to={`/projects/${project.id}`} key={project.id}>
            <Project 
              title={project.title}
              image={project.image}
              description={project.description}
              id={project.id} />
          </Link>
        )
      })
    }
    return(
      <div className={classes.ListProjects}>
        {projects}
      </div>
    )
  }
}

export default ListProjects