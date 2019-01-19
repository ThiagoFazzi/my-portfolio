import React from 'react'
import classes from './FullProject.module.css'
import Images from './Images/Images'

const fullProject = (props) => (
  <div className={classes.FullProject}>
    <img src={props.image} alt={props.image} />
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <Images images={props.images}/>
  </div>
)

export default fullProject