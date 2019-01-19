import React, { Component } from 'react'
import classes from './AllProjects.module.css'
import data from '../../../assets/json/data.json'

import Projects from '../../../components/Projects/Projects'

class AllProjects extends Component {

  render(){
    return(
      <div className={classes.AllProjects}>
        <Projects projects={data.projects}/>
      </div>
    )
  }
}

export default AllProjects