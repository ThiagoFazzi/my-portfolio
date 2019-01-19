import React from 'react'
import classes from './Image.module.css'

const image = (props) => (
  <>
  <div className={classes.Image}>
    <img src={props.path} alt={props.label} />
  </div>
  </>
)

export default image