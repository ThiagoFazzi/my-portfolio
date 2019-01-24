import React from 'react'
import classes from './FullProject.module.css'
import Images from './Images/Images'

const fullProject = (props) => (
  <div className={classes.FullProject}>
    <img src={props.image} alt={props.image} />
    <h1>{props.title}</h1>
    <a href={props.website} target="_blank">Project Link</a>
    <p>{props.description}</p>
    {(props.images) ? <Images images={props.images}/> : null}
  </div>
)

export default fullProject