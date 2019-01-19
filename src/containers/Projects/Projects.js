import React, { Component } from 'react'
import classes from './Projects.module.css'
import {Switch, Route} from 'react-router-dom'
import AllProjects from '../Projects/AllProjects/AllProjects'

class Projects extends Component {

  render(){
    return(
      <div className={classes.Projects}>
        <h1>Projects</h1>
        <Switch>
          <Route path='/projects' exact component={AllProjects} />
        </Switch>
      </div>
    )
  }
}

export default Projects