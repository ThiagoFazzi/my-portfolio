import React from 'react'

const image = (props) => (
  <>
    <img src={props.path} alt={props.label} />
    <p>{props.label}</p>
  </>
)

export default image