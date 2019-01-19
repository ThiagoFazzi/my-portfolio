import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem  link='/' active>Home</NavigationItem>
    <NavigationItem  link='/projects'>Projects</NavigationItem>
    <NavigationItem  link='/blog'>Blog</NavigationItem>
    <NavigationItem  link='/contact'>Contact</NavigationItem>
  </ul>
)

export default navigationItems