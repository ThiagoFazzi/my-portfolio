import React from 'react'
import classes from './Logo.module.css'
import profileLogo from '../../assets/images/thiago-photo.jpg'


const logo = (props) => (
  <div className={classes.Logo}>
    <img src={profileLogo} alt='Profile' />
  </div>
)

export default logo