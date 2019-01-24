import React, { Component } from 'react'
import classes from './Blog.module.css'
import Post from '../../components/Blog/Post'

class Blog extends Component {
render(){
  return(
    <div className={classes.Blog}>
      <Post />
    </div>
  )
}

}

export default Blog