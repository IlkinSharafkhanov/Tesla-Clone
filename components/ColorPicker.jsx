import React from "react";
import { useState, useContext } from "react";
import styles from "../styles/ComponentsStyles/ColorPicker.module.scss";
import WhiteButton from "./Buttons/WhiteButton";
import SideNavContext from "./SideNavContext";

const ColorPicker = () => {
  const { outlineColor, setColor } = useContext(SideNavContext);
  const { carColor, setCarColor } = useContext(SideNavContext);
  const { wheel, setWheel } = useContext(SideNavContext);
  const { autopilot, setAutopilot } = useContext(SideNavContext);

  return (
    <div className={styles.colorContainer}>
      <div className={styles.paintWheels}>
        <div className={styles.paint}>
          <h2>Paint</h2>
          <div className={styles.colors}>
            <div
              onClick={() => setCarColor(1)}
              style={
                carColor === 1
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.white}
            >
              <img src="/images/white.jpg" alt="" />
            </div>
            <div
              onClick={() => setCarColor(2)}
              style={
                carColor === 2
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.black}
            >
              <img src="/images/black.jpg" alt="" />
            </div>
            <div
              onClick={() => setCarColor(3)}
              style={
                carColor === 3
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.grey}
            >
              <img src="/images/grey.jpg" alt="" />
            </div>
            <div
              onClick={() => setCarColor(4)}
              style={
                carColor === 4
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.blue}
            >
              <img src="/images/blue.jpg" alt="" />
            </div>
            <div
              onClick={() => setCarColor(5)}
              style={
                carColor === 5
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.red}
            >
              <img src="/images/red.jpg" alt="" />
            </div>
          </div>
          <p
            style={carColor === 1 ? { display: "block" } : { display: "none" }}
          >
            Pearl White Multi-Coat <span>Included</span>
          </p>
          <p
            style={carColor === 2 ? { display: "block" } : { display: "none" }}
          >
            Solid Black <span>$1,500</span>
          </p>
          <p
            style={carColor === 3 ? { display: "block" } : { display: "none" }}
          >
            Midnight Silver Metallic <span>$1,500</span>
          </p>
          <p
            style={carColor === 4 ? { display: "block" } : { display: "none" }}
          >
            Deep Blue Metallic <span>$1,500</span>
          </p>
          <p
            style={carColor === 5 ? { display: "block" } : { display: "none" }}
          >
            Red Multi-Coat <span>$1,500</span>
          </p>
        </div>
        <div className={styles.wheels}>
          <h2>Wheels</h2>
          <div className={styles.wheelTypes}>
            <div
              onClick={() => setWheel(1)}
              style={
                wheel === 1
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.standard}
            >
              <img src="/images/wheel1.png" />
            </div>
            <div
              onClick={() => setWheel(2)}
              style={
                wheel === 2
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.fancy}
            >
              <img src="/images/wheel2.png" />
            </div>
          </div>
          <p style={wheel === 1 ? { display: "block" } : { display: "none" }}>
          19" Tempest Wheels <span>Included</span>
          </p>
          <p style={wheel === 2 ? { display: "block" } : { display: "none" }}>
            21" Arachnid Wheels <span>$4,500</span>
          </p>
          <span>All-Season Tires</span>
          <span style={wheel === 1 ? { display: "block" } : { display: "none" }}>Range (EPA est.) : 405mi</span>
          <span style={wheel === 2 ? { display: "block" } : { display: "none" }}>Range (est.) : 375mi</span>
          <WhiteButton>Learn More</WhiteButton>
        </div>
      </div>
      <div className={styles.interiorEnhancedAP}>
        <div className={styles.interior}>
          <h2>Interior</h2>
          <div className={styles.interiorColors}>
            <div
              onClick={() => setColor(1)}
              style={
                outlineColor === 1
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.black}
            >
              <img src="/images/black.jpg" alt="" />
            </div>
            <div
              onClick={() => setColor(2)}
              style={
                outlineColor === 2
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.white}
            >
              <img src="/images/white.jpg" alt="" />
            </div>
            <div
              onClick={() => setColor(3)}
              style={
                outlineColor === 3
                  ? { outline: "3px solid #3E6AE1" }
                  : { outline: "none" }
              }
              className={styles.cream}
            >
              <img src="/images/cream.jpg" alt="" />
            </div>
          </div>
          <p
            style={
              outlineColor === 1 ? { display: "block" } : { display: "none" }
            }
          >
            All Black <span>Included</span>
          </p>
          <p
            style={
              outlineColor === 2 ? { display: "block" } : { display: "none" }
            }
          >
            Black and White <span>$2,000</span>
          </p>
          <p
            style={
              outlineColor === 3 ? { display: "block" } : { display: "none" }
            }
          >
            Cream <span>$2,000</span>
          </p>
          <span
            style={
              outlineColor === 1 ? { display: "block" } : { display: "none" }
            }
          >
            Ebony Décor
          </span>
          <span
            style={
              outlineColor === 2 || outlineColor === 3
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Walnut Décor
          </span>
          <WhiteButton>Feature Details</WhiteButton>
        </div>
        <div className={styles.enhancedAP}>
          <div className={styles.enhancedHeading}>
            <h2>Enhanced Autopilot</h2>
            <span>$6,000</span>
          </div>
          <ul>
            <li>Navigate on Autopilot</li>
            <li>Auto Lane Change</li>
            <li>Autopark</li>
            <li>Summon</li>
            <li>Smart Summon</li>
          </ul>
          <div className={styles.buttons}>
            <button
              onClick={() => setAutopilot(!autopilot)}
              style={
                autopilot === false ? { display: "block" } : { display: "none" }
              }
              className={styles.blueButton}
            >
              Add
            </button>
            <button
              onClick={() => setAutopilot(!autopilot)}
              style={
                autopilot === true ? { display: "block" } : { display: "none" }
              }
              className={styles.remove}
            >
              Remove
            </button>
            <WhiteButton>Feature Details</WhiteButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
