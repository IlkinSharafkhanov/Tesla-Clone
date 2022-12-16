// styles
import styles from "../styles/PagesStyles/Home.module.scss";
// next imports
import Link from "next/link";
import Head from "next/head";
//font awesome
//components
import BlackButton from "../components/Buttons/BlackButton";
import WhiteButton from "../components/Buttons/WhiteButton";
import SideResponseNav from "../components/SideResponseNav";
import SideNavContext from "../components/SideNavContext";
//react imports
import { useContext, useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import {IoIosArrowDown} from 'react-icons/io'
import { useRouter } from "next/router";



export default function Home() {

  const navigate = useRouter()
  const {active} = useContext(SideNavContext)

  useEffect(() => {
    // window.scrollTo({top: 0, behavior: 'smooth'});
    navigate.push("/")
    if(window !== undefined) {
      window.scrollTo(0, 0)
    }
    // window.addEventListener('scroll', () => {
    //   console.log(window.scrolly)
    // })
    AOS.init()
  },[])



  return (
    <>
    <SideResponseNav/>
    <div style={active === true ? {filter: "blur(5px) brightness(0.5)"}: {filter: "none"}} className={ styles.container}> 
    <Head>
      <title>Tesla</title>
      <link rel="icon" href="../public/favicon.ico" />
    </Head>
      <div className={styles.homeModel3}>
        <div data-aos="fade-up" className={styles.model3desc}>
          <h2>Model 3</h2>
          <p>
            Order Online for <Link href="#">Touchless Delivery</Link>
          </p>
        </div>
        <div className={styles.homeButtons}>
          <BlackButton>Custom Order</BlackButton>
          <WhiteButton>Existing Inventory</WhiteButton>
        </div>
        <div className={styles.scroller}>
          <Link href="#model-y">
            <span><IoIosArrowDown/></span>
          </Link>
        </div>
      </div>

      <div id="model-y" className={styles.homeModelY}>
        <div className={styles.modelydesc}>
          <h2>Model Y</h2>
          <p>
            Order Online for <Link href="#">Touchless Delivery</Link>
          </p>
        </div>
        <div className={styles.homeButtons}>
          <BlackButton>Custom Order</BlackButton>
          <WhiteButton>Existing Inventory</WhiteButton>
        </div>
      </div>

      <div className={styles.homeModelS}>
        <div className={styles.modelsdesc}>
          <h2>Model S</h2>
          <p>
            Order Online for <Link href="#">Touchless Delivery</Link>
          </p>
        </div>
        <div className={styles.homeButtons}>
          <BlackButton>Custom Order</BlackButton>
          <WhiteButton>Existing Inventory</WhiteButton>
        </div>
      </div>

      <div className={styles.homeModelX}>
        <div className={styles.modelxdesc}>
          <h2>Model X</h2>
          <p>
            Order Online for <Link href="#">Touchless Delivery</Link>
          </p>
        </div>
        <div className={styles.homeButtons}>
          <BlackButton>Custom Order</BlackButton>
          <WhiteButton>Existing Inventory</WhiteButton>
        </div>
      </div>

      <div className={styles.solarPanel}>
        <div className={styles.solarPanelDesc}>
          <h2>Solar Panel</h2>
          <p>Lowest Cost Solar Panels in America</p>
        </div>
        <div className={styles.homeButtons}>
          <BlackButton>Order Now</BlackButton>
          <WhiteButton>Learn More</WhiteButton>
        </div>
      </div>

      <div className={styles.solarRoof}>
        <div className={styles.solarRoofDesc}>
          <h2>Solar Roof</h2>
          <p>Produce Clean Energy From Your Roof</p>
        </div>
        <div className={styles.homeButtons}>
          <BlackButton>Order Now</BlackButton>
          <WhiteButton>Learn More</WhiteButton>
        </div>
      </div>

      <div className={styles.accessories}>
        <div className={styles.accessoriesDesc}>
          <h2>Accessories</h2>
          <p>Produce Clean Energy From Your Roof</p>
        </div>
        <div className={styles.homeButtons}>
          <BlackButton>Shop Now</BlackButton>
        </div>
      </div>
    </div>
    </>
  );
}
