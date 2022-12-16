import React from 'react'
//styles
import styles from "../../styles/Buttons/BlackButtonWithOutline.module.scss"

const BlackButtonWithOutline = ({children}) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default BlackButtonWithOutline