import React, { Component } from 'react'
import classes from './Home.module.css'
import data from '../../assets/json/data.json'
import Introduction from '../../components/Introduction/Introduction'

class Home extends Component {

  render() {
    return(
      <div className={classes.Home}>
        <h1>Introduction</h1>
        <Introduction intro={data.introduction} />
      </div>
    )
  }
}

export default Home