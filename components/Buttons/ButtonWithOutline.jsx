import React from 'react'
//styles
import styles from "../../styles/Buttons/ButtonWIthOutline.module.scss"

const ButtonWithOutline = ({children}) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default ButtonWithOutline