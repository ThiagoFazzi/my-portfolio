import React, { Component } from 'react'
import classes from './FullProject.module.css'
import data from '../../../assets/json/data.json'

import Project from '../../../components/Projects/FullProject/FullProject'

class FullProject extends Component {

  state={
    project: null
  }

  componentDidMount(){
    this.fullProjectHandler(this.props.match.params.id)
  }

  fullProjectHandler(id){
    const project = data.projects.filter(project => project.id === +id)
    this.setState({project: project })
  }

  render(){
    let project = <p>Loading Project ......</p>
    if(this.state.project){
      project = this.state.project.map(project => {
        return(
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            id={project.id}
            images={project.images} />
        )
      })
    }
    return(
      <div className={classes.FullProject}>
        {project}
      </div>
    )
  }

}

export default FullProject