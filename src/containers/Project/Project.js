import React, { Component } from 'react'
import classes from './Project.module.css'
import data from '../../assets/json/data.json'

import Projects from '../../components/Projects/Projects'

class Project extends Component {

  render(){
    return(
      <div className={classes.Project}>
        <h1>Projects</h1>
        <Projects projects={data.projects}/>
      </div>
    )
  }
}

export default Project