import React from 'react'
//styles
import styles from "../../styles/Buttons/WhiteButton.module.scss"

const WhiteButton = ({children}) => {
  return (
   <button className={styles.button}>{children}</button>
  )
}

export default WhiteButton