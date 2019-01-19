import React from 'react'
import classes from './Project.module.css'
import Images from '../Images/Images'

const project = (props) => (
  <div className={classes.Project}>
    <img src={props.image} alt={props.image} />
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    {/*<Images images={props.images} />*/}
  </div>
)
   


export default project