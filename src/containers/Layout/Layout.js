import React, { Component } from 'react'
import classes from './Layout.module.css'
import Toobar from '../../components/Navigation/Toobar/Toobar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import AdminToobar from '../../components/Admin/AdminToobar/AdminToobar'


class Layout extends Component {

  state = {
    showSideDrawer: false,
    showAdmin: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleClickedHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  adminToggleClickedHandler = () => {
    this.setState((prevState) => {
      return {showAdmin: !prevState.showAdmin}
    })
  }

  render(){
    return(
      <>
        {(this.state.showAdmin) ? <AdminToobar  clicked={this.adminToggleClickedHandler}/> : null}
        <Toobar drawerToggleClicked={this.sideDrawerToggleClickedHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout