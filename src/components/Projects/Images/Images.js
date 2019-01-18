import React from 'react'

const images = (props) => {
  if(!props.images) return <p>No images</p>

  return(
    <>
    {props.images.map(image => { 
      <image path={image.path} label={image.label} key={image.id}/>
    })}
    </>
  )
}

export default images