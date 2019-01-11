import React, { Component } from 'react';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div>Header</div>
        <div>Menu</div>
        <div>Content, New Components such(projects-post format, introduction)</div>
        <div>Footer</div>
      </div>
    );
  }
}

export default App;
