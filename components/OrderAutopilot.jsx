import React, {useState} from "react";
import styles from "../styles/ComponentsStyles/OrderAutopilot.module.scss";
import WhiteButton from "./Buttons/WhiteButton";

const OrderAutopilot = () => {
  const [artificialIntel, setAI] = useState(false);
  return (
    <div className={styles.orderAutopilot}>
      <div className={styles.autopilotHeading}>
        <h2>Full Self-Driving Capability</h2>
        <span>$15,000</span>
      </div>
      <ul>
        <li>All functionality of Basic Autopilot and Enhanced Autopilot</li>
        <li>Traffic Light and Stop Sign Control</li>
      </ul>
      <div className={styles.comingSoon}>
        <span>Coming soon</span>
        <ul>
          <li>Autosteer on city streets</li>
        </ul>
        <span className={styles.details}>
          The currently enabled features require active driver supervision and
          do not make the vehicle autonomous. The activation and use of these
          features are dependent on achieving reliability far in excess of human
          drivers as demonstrated by billions of miles of experience, as well as
          regulatory approval, which may take longer in some jurisdictions. As
          these self-driving features evolve, your car will be continuously
          upgraded through over-the-air software updates.
        </span>
        <div className={styles.buttons}>
          <button
            onClick={() => setAI(!artificialIntel)}
            style={
              artificialIntel === false
                ? { display: "block" }
                : { display: "none" }
            }
            className={styles.blueButton}
          >
            Add
          </button>
          <button
            onClick={() => setAI(!artificialIntel)}
            style={
              artificialIntel === true
                ? { display: "block" }
                : { display: "none" }
            }
            className={styles.remove}
          >
            Remove
          </button>
          <WhiteButton>Feature Details</WhiteButton>
        </div>
      </div>
    </div>
  );
};

export default OrderAutopilot;
