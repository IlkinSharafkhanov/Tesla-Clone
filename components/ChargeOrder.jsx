import React from "react";
import styles from "../styles/ComponentsStyles/ChargeOrder.module.scss";
import { FcInfo } from "react-icons/fc";
import WhiteButton from "./Buttons/WhiteButton";

const ChargeOrder = () => {
  return (
    <>
    <div className={styles.charge}>
      <div className={styles.chargeHeading}>
        <h2>Charging</h2>
        <div className={styles.info}>
          <FcInfo />
          <span>Home charging equipment is not included</span>
        </div>
      </div>
      <div className={styles.chargingPicker}>
        <div className={styles.pick}>
          <input type="checkbox" name="wall" id="" />
          <div className={styles.checkboxDiv}>
            <span>Wall Connector</span>
            <span>$400</span>
          </div>
        </div>
        <div className={styles.pick}>
          <input type="checkbox" name="mobile" id="" />
          <div className={styles.checkboxDiv}>
            <span>Mobile Connector</span>
            <span>$230</span>
          </div>
        </div>
      </div>
      <WhiteButton>Learn More</WhiteButton>
    </div>
    <div className={styles.order}>
        <h2>Order Your Model S</h2>
        <span>Est. Delivery: Dec 2022 - Feb 2023</span>
        <button className={styles.blueButton}>Continue to Payment</button>
    </div>
    </>
  );
};

export default ChargeOrder;
