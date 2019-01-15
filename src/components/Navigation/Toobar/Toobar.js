import React from 'react'
import classes from './Toobar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Title from '../Title/Title'

const toobar = (props) => (
  <>
    <header className={classes.Toobar}>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.Title}>
        <Title title='Thiago Lopes Fazzi'/>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  </>
)

export default toobar