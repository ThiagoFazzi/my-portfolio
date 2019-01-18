import React, { Component } from 'react'
import data from '../../assets/json/data.json'
import Projects from '../../components/Project/Projects'

class Project extends Component {

  render(){
    return(
      <>
      {console.log(data)}
      <Projects projects={data.projects}/>
      </>
    )
  }
}

export default Project