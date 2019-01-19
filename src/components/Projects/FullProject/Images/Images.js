import React from 'react'
import Image from './Image/Image'
import classes from './Images.module.css';

const images = (props) => {
  return(
    <div className={classes.Images}>
      {props.images.map(image => {
        return(
          <Image 
            path={image.path} 
            label={image.label} 
            key={image.id} />
        )
      })}
    </div>
  )
}

export default images