import React from 'react'
import classes from './NavigationItem.module.css'
import { Link } from 'react-router-dom'

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <Link 
      to={{pathname: props.link}}
      className={props.active ? classes.active : null}>{props.children}</Link>
  </li>
)

export default navigationItem