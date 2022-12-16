import Link from "next/link";
import React from "react";
import WhiteButton from "./Buttons/WhiteButton";
import styles from "../styles/ComponentsStyles/MotorChoiceOrder.module.scss";
import { FcInfo } from "react-icons/fc";
import { useContext } from "react";
import SideNavContext from "./SideNavContext";

const MotorChoiceOrder = () => {
  const { priceChoice, setPriceChoice } = useContext(SideNavContext);
  const { motor, setMotor } = useContext(SideNavContext);

  return (
    <div className={styles.motorChoiceOrder}>
      <div className={styles.choiceHeading}>
        <h1>Model S</h1>
        <p>Est. Delivery: Dec 2022 - Feb 2023</p>
        <div className={styles.info}>
          <FcInfo />
          <Link href="#">Enter Delivery ZIP Code</Link>
        </div>
      </div>
      <div className={styles.priceSelector}>
        <span
          onClick={() => setPriceChoice(1)}
          style={
            priceChoice === 1
              ? {
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  backgroundColor: "white",
                }
              : { backgroundColor: "transparent" }
          }
        >
          Purchase Price
        </span>
        <span
          onClick={() => setPriceChoice(2)}
          style={
            priceChoice === 2
              ? {
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  backgroundColor: "white",
                }
              : { backgroundColor: "transparent" }
          }
        >
          Potential Savings
        </span>
      </div>
      <div className={styles.generalInfo}>
        <div className={styles.infoCard}>
          <h3 style={motor === 1 ? { display: "block" } : { display: "none" }}>
            405<small>mi</small>
          </h3>
          <h3 style={motor === 2 ? { display: "block" } : { display: "none" }}>
            396<small>mi</small>
          </h3>
          <span>Range (est.)</span>
        </div>
        <div className={styles.infoCard}>
          <h3 style={motor === 1 ? { display: "block" } : { display: "none" }}>
            149<small>mph</small>
          </h3>
          <h3 style={motor === 2 ? { display: "block" } : { display: "none" }}>
            200<small>mph</small>
          </h3>
          <span>Top Speed</span>
        </div>
        <div className={styles.infoCard}>
          <h3 style={motor === 1 ? { display: "block" } : { display: "none" }}>
            3.1<small>sec</small>
          </h3>
          <h3 style={motor === 2 ? { display: "block" } : { display: "none" }}>
            1.99<small>sec</small>
          </h3>
          <span>0-60 mph</span>
        </div>
      </div>
      <div className={styles.motorSelector}>
        <div className={styles.motorSelection}>
          <h4>Dual Motor All-Wheel Drive</h4>
          <div
            onClick={() => setMotor(1)}
            style={
              motor === 1
                ? { outline: "3px solid #3E6AE1" }
                : { outline: "none" }
            }
            className={styles.simpleS}
          >
            <span>Model S</span>
            <span
              style={
                priceChoice === 1 ? { display: "block" } : { display: "none" }
              }
            >
              $104,990
            </span>
            <span
              style={
                priceChoice === 2 ? { display: "block" } : { display: "none" }
              }
            >
              $96,590
            </span>
          </div>
        </div>
        <div className={styles.motorSelection}>
          <h4>Tri Motor All-Wheel Drive</h4>
          <div
            onClick={() => setMotor(2)}
            style={
              motor === 2
                ? { outline: "3px solid #3E6AE1" }
                : { outline: "none" }
            }
            className={styles.plaidS}
          >
            <span>Model S Plaid</span>
            <span
              style={
                priceChoice === 1 ? { display: "block" } : { display: "none" }
              }
            >
              $135,990
            </span>
            <span
              style={
                priceChoice === 2 ? { display: "block" } : { display: "none" }
              }
            >
              $127,590
            </span>
          </div>
        </div>
        <p>
          All prices are shown without potential incentives or gas savings of
          $8,400. <span>Learn More</span>
        </p>
      </div>
      <WhiteButton>Feature Details</WhiteButton>
    </div>
  );
};

export default MotorChoiceOrder;
