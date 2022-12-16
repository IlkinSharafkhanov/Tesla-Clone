import React from 'react'
import Link from 'next/link'
import styles from "../../styles/Outline/Footer.module.scss"
import SideNavContext from "../SideNavContext";
import { useContext } from 'react';

const Footer = () => {
  const {active} = useContext(SideNavContext)
  return (
    <footer className={active == false ? styles.footer: styles.activeFooter}>
        <ul>
            <li><Link href="#">Tesla © 2022</Link></li>
            <li><Link href="#">Privacy & Legal</Link></li>
            <li><Link href="#">Vehicle Recalls</Link></li>
            <li className={styles.hideResp}><Link href="#">Contact</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">News</Link></li>
            <li className={styles.hideResp}><Link href="#">Engage</Link></li>
            <li className={styles.hideResp}><Link href="#">Locations</Link></li>
        </ul>
    </footer>
  )
}

export default Footer