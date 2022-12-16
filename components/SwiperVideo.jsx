import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/ComponentsStyles/SwiperVideo.module.scss";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import SideNavContext from "./SideNavContext";
import { useContext } from "react";

const SwiperVideo = () => {
  const { carColor, setCarColor } = useContext(SideNavContext);
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img
            style={{ display: "block", width: "100%" }}
            src={
              carColor === 1
                ? "/images/whiteTesla1.jpg"
                : carColor === 2
                ? "/images/blackTesla1.jpg"
                : carColor === 3
                ? "/images/greyTesla1.jpg"
                : carColor === 4
                ? "/images/blueTesla1.jpg"
                : carColor === 5
                ? "/images/redTesla1.jpg"
                :null
            }
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            style={{ display: "block", width: "100%" }}
            src={
              carColor === 1
                ? "/images/whiteTesla2.jpg"
                : carColor === 2
                ? "/images/blackTesla2.jpg"
                : carColor === 3
                ? "/images/greyTesla2.jpg"
                : carColor === 4
                ? "/images/blueTesla2.jpg"
                : carColor === 5
                ? "/images/redTesla2.jpg"
                :null
            }
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            style={{ display: "block", width: "100%" }}
            src={
              carColor === 1
                ? "/images/whiteTesla3.jpg"
                : carColor === 2
                ? "/images/blackTesla3.jpg"
                : carColor === 3
                ? "/images/greyTesla3.jpg"
                : carColor === 4
                ? "/images/blueTesla3.jpg"
                : carColor === 5
                ? "/images/redTesla3.jpg"
                :null
            }
          /> 
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            style={{ display: "block", width: "100%" }}
            src={
              carColor === 1
                ? "/images/whiteTesla4.jpg"
                : carColor === 2
                ? "/images/blackTesla4.jpg"
                : carColor === 3
                ? "/images/greyTesla4.jpg"
                : carColor === 4
                ? "/images/blueTesla4.jpg"
                : carColor === 5
                ? "/images/redTesla4.jpg"
                :null
            }
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            style={{ display: "block", width: "100%" }}
            src="images/whiteTesla5.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperVideo;
