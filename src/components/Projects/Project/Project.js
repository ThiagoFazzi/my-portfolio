import React from 'react'
import classes from './Project.module.css'

const project = (props) => (
  <div className={classes.Project}>
    <img src={props.image} alt={props.image} />
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
)

export default project