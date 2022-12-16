import React from 'react'
// styles
import styles from "../../styles/Buttons/BlackButton.module.scss"

const BlackButton = ({children}) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default BlackButton