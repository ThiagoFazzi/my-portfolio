import React from 'react'
import Images from '../Images/Images'

const project = (props) => (
  <>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <Images images={props.images}/>
  </>
)

export default project