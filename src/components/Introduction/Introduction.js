import React from 'react'
import classes from './Introduction.module.css'

const introduction = (props) => {
    return props.intro.map(i => <p className={classes.Introduction} key={i.paragraph}>{i.content}</p>)
}

export default introduction