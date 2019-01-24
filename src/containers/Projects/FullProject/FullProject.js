import React, { Component } from 'react'
import classes from './FullProject.module.css'
import axios from 'axios'
import Project from '../../../components/Projects/FullProject/FullProject'

class FullProject extends Component {

  state={
    project: null
  }

  componentDidMount(){
    axios.get('https://react-my-portfolio.firebaseio.com/0/projects.json')
      .then(response => {
        const project = response.data.filter(project => project.id === +this.props.match.params.id)
        this.setState({project: project})
      })
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