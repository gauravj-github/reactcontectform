import React from 'react'
import styles from './Button.module.css'


const Button = ({isOutline,text,...rest}) => {
  return (
    <div>
        <button {...rest} className={isOutline ? styles.outline_button :styles.primary_button}>{text}</button>
    </div>
  )
}

export default Button