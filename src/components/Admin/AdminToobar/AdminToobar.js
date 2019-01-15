import React from 'react'
import classes from './AdminToobar.module.css'

const adminToobar = (props) => (
  <div className={classes.AdminToobar}>
    <div>My-portfolio | Admin Area |</div>
    <button onClick={props.clicked}>Close</button>
  </div>
)

export default adminToobar