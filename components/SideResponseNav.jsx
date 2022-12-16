//react imports
import React, { useContext } from "react";
//styles
import styles from "../styles/ComponentsStyles/SideResponseNav.module.scss";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
//components
import SideNavContext from "./SideNavContext";

const SideResponseNav = () => {
  const icon = <FontAwesomeIcon icon={faX} />;

  const {active, setActive} = useContext(SideNavContext)


  return (
    <div className={active == false ? styles.container: styles.activeContainer}>
      <div className={styles.burgerMenu}>
        <div className={styles.closeIcon}>
          <span onClick={() => setActive(!active)}>{icon}</span>
        </div>
        <nav>
          <ul>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
            <li>Existing Inventory</li>
            <li>Used Inventory</li>
            <li>Trade-in</li>
            <li>Test Drive</li>
            <li>Insurance</li>
            <li>Powerwall</li>
            <li>Commercial Energy</li>
            <li>Utilities</li>
            <li>Charging</li>
            <li>Find Us</li>
            <li>Support</li>
            <li>Investor Relations</li>
            <li>Shop</li>
            <li>Account</li>
            <li>More</li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideResponseNav;
