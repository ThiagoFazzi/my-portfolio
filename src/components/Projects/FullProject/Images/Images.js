import React from 'react'
import Image from './Image/Image'

const images = (props) => {
  if(!props.images) return <p>No images</p>

  return props.images.map(image => <Image path={image.path} label={image.label} key={image.id} /> )
}

export default images