import React, { Component } from 'react'
import classes from './Home.module.css'
import axios from 'axios'
import Introduction from '../../components/Introduction/Introduction'

class Home extends Component {

  state = {
    introduction: null
  }

  componentDidMount(){
    axios.get('https://react-my-portfolio.firebaseio.com/0.json')
      .then(response => {
        this.setState({introduction: response.data.introduction})
      })
      .catch(error => console.log(error))
  }

  render() {
    return(
      <div className={classes.Home}>
        <h1>Introduction</h1>
        {this.state.introduction ? <Introduction intro={this.state.introduction} /> : <p>Loading...</p>}
      </div>
    )
  }
}

export default Home