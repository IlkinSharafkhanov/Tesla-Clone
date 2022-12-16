import styles from "../styles/PagesStyles/OrderNow.module.scss"
import SwiperVideo from "../components/SwiperVideo"
import MotorChoiceOrder from "../components/MotorChoiceOrder"
import React from 'react'
import Head from "next/head"
import ColorPicker from "../components/ColorPicker"
import OrderAutopilot from "../components/OrderAutopilot"
import ChargeOrder from "../components/ChargeOrder"
import {IoIosArrowUp} from "react-icons/io"

const orderNowModelS = () => {
  
  return (
    <div className={styles.orderContainer}>
      <Head>
        <title>Design Your Model S | Tesla</title>
      </Head>
        <div className={styles.photoHolder}>
            <SwiperVideo/>
            <div className={styles.priceHolder}>
              <div className={styles.upArrow}><IoIosArrowUp/></div>
              <p>$104,990 Vehicle price</p>
              <span>$96,590 After potential savings</span>
            </div>
        </div>
        <div className={styles.optionsHolder}>
            <MotorChoiceOrder/>
            <ColorPicker/>
            {/* <OrderAutopilot/> */}
            {/* <ChargeOrder/> */}
        </div>
    </div>
  )
}

export default orderNowModelS