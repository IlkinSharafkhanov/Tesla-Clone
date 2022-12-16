//react tools
import React, { useContext,useEffect, useState } from "react";

//styles 
import styles from "../styles/PagesStyles/ModelS.module.scss";

//components
import ButtonWithOutline from "../components/Buttons/ButtonWithOutline";
import BlackButtonWithOutline from "../components/Buttons/BlackButtonWithOutline";
import WhiteButton from "../components/Buttons/WhiteButton";
import BlackButton from "../components/Buttons/BlackButton";
import SectionSeparator from "../components/SectionSaparator";
import Modal from "../components/Modals/BasicModal";
import SideNavContext from "../components/SideNavContext";
import SideResponseNav from "../components/SideResponseNav";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

//next components
import Head from "next/head";
import Link from "next/link";


const icon = <FontAwesomeIcon icon={faEye} />;

const ModelS = () => {
  const [activePlaid, setActivePlaid] = useState(false);
  const [choice, setChoice] = useState(false);
  const [map, setMap] = useState(1);
  const [feature, setFeature] = useState(1);
  const [selector, setSelector] = useState(1);


  const {active} = useContext(SideNavContext)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setActivePlaid(!activePlaid);
      map < 4 ? setMap(map + 1) : setMap(1);
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [activePlaid, map, feature]);

  return (
    <>
    <SideResponseNav/>
    <div style={active === true ? {filter: "blur(5px) brightness(0.5)"}: {filter: "none"}} className={styles.container}>
      <Modal />
      <Head>
        <title>Model S | Tesla</title>
      </Head>
      <div className={styles.modelS}>
        <div className={styles.modelName}>
          <h1>Model S</h1>
          <span>Plaid</span>
        </div>
        <div className={styles.welcomeDesc}>
          <div className={styles.welcomeDescLeft}>
            <div className={styles.welcomeStat}>
              <h3>396 mi</h3>
              <span>Range (EPA est.)</span>
            </div>
            <div className={styles.welcomeStat}>
              <h3>1.99 s</h3>
              <span>0-60 mph</span>
            </div>
            <div className={styles.welcomeStat}>
              <h3>200mph</h3>
              <span>Top Speed</span>
            </div>
            <div id={styles.peakPower} className={styles.welcomeStat}>
              <h3>1,020 hp</h3>
              <span>Peak Power</span>
            </div>
          </div>
          <Link href="/orderNowModelS"><ButtonWithOutline>Order Now</ButtonWithOutline></Link>
        </div>
      </div>

      <div className={styles.interiorHeading}>
        <h2>Interior of the future</h2>
      </div>

      <div className={styles.interiorBackground}></div>

      <SectionSeparator />

      <div className={styles.dashboardInfo}>
        <div className={styles.videoSlider}>
          <video
            style={selector === 1 ? { display: "block" } : { display: "none" }}
            autoPlay={true}
            loop={true}
            muted
            src="/images/selector-vidoe-1.mp4"
            type="video/mp4"
          />
          <video
            style={selector === 2 ? { display: "block" } : { display: "none" }}
            autoPlay={true}
            loop={true}
            muted
            src="/images/selector-video-2.mp4"
            type="video/mp4"
          />
          <video
            style={selector === 3 ? { display: "block" } : { display: "none" }}
            autoPlay={true}
            loop={true}
            muted
            src="/images/selector-video-3.mp4"
            type="video/mp4"
          />
          <video
            style={selector === 4 ? { display: "block" } : { display: "none" }}
            autoPlay={true}
            loop={true}
            muted
            src="/images/selector-video-4.mp4"
            type="video/mp4"
          />
          <video
            style={selector === 5 ? { display: "block" } : { display: "none" }}
            autoPlay={true}
            loop={true}
            muted
            src="/images/selector-video-5.mp4"
            type="video/mp4"
          />
        </div>
        <div className={styles.videoController}>
          <div className={styles.videoSelector}>
            <div
              onClick={() => setSelector(1)}
              className={
                selector === 1 ? styles.activeSelector : styles.selector
              }
            ></div>
            <div
              onClick={() => setSelector(2)}
              className={
                selector === 2 ? styles.activeSelector : styles.selector
              }
            ></div>
            <div
              onClick={() => setSelector(3)}
              className={
                selector === 3 ? styles.activeSelector : styles.selector
              }
            ></div>
            <div
              onClick={() => setSelector(4)}
              className={
                selector === 4 ? styles.activeSelector : styles.selector
              }
            ></div>
            <div
              onClick={() => setSelector(5)}
              className={
                selector === 5 ? styles.activeSelector : styles.selector
              }
            ></div>
          </div>
          <div
            style={selector === 1 ? { display: "block" } : { display: "none" }}
            className={styles.videoDesc}
          >
            <h3>Cinematic Experience</h3>
            <span>
              A 17” touchscreen with left-right tilt offers 2200 x 1300
              resolution, true colors and exceptional responsiveness for gaming,
              movies and more.
            </span>
          </div>
          <div
            style={selector === 2 ? { display: "block" } : { display: "none" }}
            className={styles.videoDesc}
          >
            <h3>Yoke Steering</h3>
            <span>
              A bold new approach gives you a true connection to Model S,
              offering better steering feel and unobstructed views of your dash
              and the road ahead. Tap the brake and Model S automatically
              selects the correct direction to start your trip.
            </span>
          </div>
          <div
            style={selector === 3 ? { display: "block" } : { display: "none" }}
            className={styles.videoDesc}
          >
            <h3>Perfect Environment</h3>
            <span>
              Air vents are hidden throughout the cabin, while tri-zone
              temperature controls, ventilated seats and HEPA filtration deliver
              the perfect environment.
            </span>
          </div>
          <div
            style={selector === 4 ? { display: "block" } : { display: "none" }}
            className={styles.videoDesc}
          >
            <h3>Redesigned Second Row</h3>
            <span>
              Seating for three adults, with extra legroom, headroom and a
              stowable armrest with integrated storage and wireless charging.
            </span>
          </div>
          <div
            style={selector === 5 ? { display: "block" } : { display: "none" }}
            className={styles.videoDesc}
          >
            <h3>Console-Grade Gaming</h3>
            <span>
              Up to 10 teraflops of processing power unlock in-car gaming on-par
              with today’s newest consoles. Play from any seat with wireless
              controller and headset compatibility.
            </span>
          </div>
        </div>
      </div>

      <SectionSeparator />

      <div className={styles.generalInfoCards}>
        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <div className={styles.imageHolder}>
              <img src={"/images/general_info_1.jpg"} />
            </div>
            <div className={styles.infoCardDesc}>
              <h4>Stay connected</h4>
              <p>
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </div>
          <div id={styles.infoCard3} className={styles.infoCard}>
            <div id={styles.imageHolderRev} className={styles.imageHolder}>
              <img src={"/images/general_info_2.jpg"} />
            </div>
            <div className={styles.infoCardDesc}>
              <h4>Immersive Sound</h4>
              <p>
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers immersive listening and studio-grade sound
                quality.
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.imageHolder}>
              <img src={"/images/general_info_3.jpg"} />
            </div>
            <div className={styles.infoCardDesc}>
              <h4>Room for Everything</h4>
              <p>
                With front and rear trunks and fold-flat seats you can fit your
                bike without taking the wheel off—and your luggage too.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.modelStats}>
        <div className={styles.powerStatsContainer}>
          <div className={styles.powerStats}>
            <div className={styles.powerStat}>
              <h3>1020 hp</h3>
              <span>Peak Power</span>
            </div>
            <div className={styles.powerStat}>
              <h3>9.23 s</h3>
              <span>@155 mph 1/4 mile</span>
            </div>
            <div className={styles.powerStat}>
              <h3>1.99 s</h3>
              <span>0-60 mph</span>
            </div>
          </div>
        </div>
        <div className={styles.plaidInfo}>
          <div className={styles.plaidInfoUp}>
            <div className={styles.plaidInfoSubhead}>
              <span>Plaid</span>
              <h2>Beyond Ludicrous</h2>
            </div>
            <p>
              Model S Plaid has the quickest acceleration of any vehicle in
              production. Updated battery architecture for all Model S trims
              enables back-to-back track runs without performance degradation.{" "}
              <span>Chat with a Tesla</span> Advisor to learn more about Model
              S.
            </p>
          </div>
          <div className={styles.plaidInfoDown}>
            <div className={styles.plaidInfoButtons}>
              <BlackButtonWithOutline>Order Now</BlackButtonWithOutline>
              <WhiteButton>View Inventory</WhiteButton>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.powertrain}>
        <div className={styles.powertrainDesc}>
          <h2>Electric Powertrain</h2>
          <p>
            Model S platforms unite powertrain and battery technologies for
            unrivaled performance, range and efficiency. New module and pack
            thermal architecture allows faster charging and gives you more power
            and endurance in all conditions.
          </p>
        </div>
        <div className={styles.powertrainSlide}>
          <img src={activePlaid === false ? "/images/one_powerunit.jpg" : "/images/two_powertrain.jpg"} />
        </div>
        <div className={styles.powertrainSelector}>
          <div
            onClick={() => setActivePlaid(false)}
            className={
              activePlaid === true
                ? styles.powertrainSelectorSimple
                : styles.activePowertrainSelectorSimple
            }
          >
            <h3>Model S</h3>
            <p>
              Dual Motor All-Wheel Drive unlocks more range than any other
              vehicle in our current lineup, with insane power and maximum
              control.
            </p>
            <div className={styles.powerStats}>
              <div className={styles.powerStat}>
                <h3>3.1 s</h3>
                <span>0-60 mph</span>
              </div>
              <div className={styles.powerStat}>
                <h3>405 mi</h3>
                <span>Range (EPA est.)</span>
              </div>
              <div className={styles.powerStat}>
                <h3>670 hp</h3>
                <span>Peak Power</span>
              </div>
            </div>
          </div>
          <div
            onClick={() => setActivePlaid(true)}
            className={
              activePlaid === false
                ? styles.powertrainSelectorPlaid
                : styles.activePowertrainSelectorPlaid
            }
          >
            <h3>Model S Plaid</h3>
            <p>
              Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor
              All-Wheel Drive, featuring torque vectoring and three independent
              carbon-sleeved rotors.
            </p>
            <div className={styles.powerStats}>
              <div className={styles.powerStat}>
                <h3>1.99 s</h3>
                <span>0-60 mph</span>
              </div>
              <div className={styles.powerStat}>
                <h3>396 mi</h3>
                <span>Range (EPA est.)</span>
              </div>
              <div className={styles.powerStat}>
                <h3>1,020 hp</h3>
                <span>Peak Power</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.modelExterior}>
        <div className={styles.modelExteriorContainer}></div>
        <div className={styles.designInfo}>
          <div className={styles.designInfoUp}>
            <div className={styles.designSubheading}>
              <span>Exterior</span>
              <h2>Designed for Efficiency</h2>
            </div>
            <p>
              With a drag coefficient of just .208 Cd, the lowest on the planet,
              Model S is built for speed, endurance and range. Improved
              aerodynamics and a wider chassis offer more responsive performance
              so you can take corners quicker and with more confidence.
            </p>
          </div>
          <div className={styles.designInfoDown}>
            <div className={styles.designInfoButtons}>
              <ButtonWithOutline>Order Now</ButtonWithOutline>
              <BlackButton>View Inventory</BlackButton>
            </div>
          </div>
        </div>
      </div>

      <SectionSeparator />

      <div className={styles.generalInfoCards}>
        <div className={styles.infoCards}>
          <div id={styles.infoCard3} className={styles.infoCard}>
            <div id={styles.imageHolderRev} className={styles.imageHolder}>
              <img src={"/images/tesla_part1.jpg"} />
            </div>
            <div className={styles.infoCardDesc}>
              <h4>Stay connected</h4>
              <p>
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.imageHolder}>
              <img src={"/images/tesla_part2.jpg"} />
            </div>
            <div className={styles.infoCardDesc}>
              <h4>Immersive Sound</h4>
              <p>
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers immersive listening and studio-grade sound
                quality.
              </p>
            </div>
          </div>
          <div id={styles.infoCard3} className={styles.infoCard}>
            <div id={styles.imageHolderRev} className={styles.imageHolder}>
              <img src={"/images/tesla_part3.jpg"} />
            </div>
            <div className={styles.infoCardDesc}>
              <h4>Room for Everything</h4>
              <p>
                With front and rear trunks and fold-flat seats you can fit your
                bike without taking the wheel off—and your luggage too.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.travelDistance}>
        <div className={styles.travelDistanceLeft}>
          <video
            autoPlay={true}
            loop={true}
            muted
            src="/images/Plaid-Range-Web-Desktop-8mb.mp4"
            type="video/mp4"
          />
          <div className={styles.powerStats}>
            <div className={styles.powerStat}>
              <h3>405 mi</h3>
              <span id={styles.simpleSpan}>
                Go anywhere with up to 405 miles of estimated range on a single
                charge
              </span>
              <span id={styles.responseSpan}>Range <br />(EPA est.)</span>
            </div>
            <div className={styles.powerStat}>
              <h3>915 min</h3>
              <span id={styles.simpleSpan}>
                Recharge up to 200 miles in 15 minutes at Supercharger locations
              </span>
              <span id={styles.responseSpan}>Recharge up to 200 miles</span>
            </div>
            <div className={styles.powerStat}>
              <h3>35,000 +</h3>
              <span id={styles.simpleSpan}>Superchargers placed along popular routes</span>
              <span id={styles.responseSpan}>Global superchargers</span>
            </div>
          </div>
        </div>
        <div className={styles.travelDistanceRight}>
          <div className={styles.rightDesc}>
            <div className={styles.rightDescSubheading}>
              <span>Range</span>
              <h2>Go Anywhere</h2>
            </div>
            <p>
              With up to 405 miles of estimated range and access to the world’s
              largest and most powerful fast charging network, you’ll spend less
              time plugged in and more time on the road. Chat with a Tesla
              Advisor to learn more about Model S.
            </p>
          </div>
          <div className={styles.designInfoButtons}>
            <BlackButtonWithOutline>Order Now</BlackButtonWithOutline>
            <WhiteButton>View Inventory</WhiteButton>
          </div>
        </div>
      </div>

      <div className={styles.superchargerInfo}>
        <div className={styles.chargeInfoContainer}>
          <div className={styles.chargeTitle}>
            <h2>Freedom to Travel</h2>
            <span>
              Enter a destination on your touchscreen and Trip Planner will
              automatically calculate your route with Superchargers along the
              way.
            </span>
          </div>
          <div className={styles.chargeSlider}>
            <div className={styles.sliderPhotoHolder}>
              <img
                style={map === 1 ? { display: "block" } : { display: "none" }}
                src="/images/losangeles-sanfrancisko.png"
              />
              <img
                style={map === 2 ? { display: "block" } : { display: "none" }}
                src="/images/barkley-sacremento.png"
                alt="berkley-sacremento"
              />
              <img
                style={map === 3 ? { display: "block" } : { display: "none" }}
                src="/images/newyork-boston.png"
                alt="newyork-boston"
              />
              <img
                style={map === 4 ? { display: "block" } : { display: "none" }}
                src="/images/orlando.png"
                alt=""
              />
            </div>
            <div className={styles.photoSelector}>
              <div
                onClick={() => setMap(1)}
                className={
                  map === 1 ? styles.activePhotoOption : styles.photoOption
                }
              >
                <span>San Francisco to Los Angeles</span>
                <h3>383 miles</h3>
              </div>
              <div
                onClick={() => setMap(2)}
                className={
                  map === 2 ? styles.activePhotoOption : styles.photoOption
                }
              >
                <span>Berkeley to Lake Tahoe</span>
                <h3>178 miles</h3>
              </div>
              <div
                onClick={() => setMap(3)}
                className={
                  map === 3 ? styles.activePhotoOption : styles.photoOption
                }
              >
                <span>Manhattan to Boston</span>
                <h3>211 miles</h3>
              </div>
              <div
                onClick={() => setMap(4)}
                className={
                  map === 4 ? styles.activePhotoOption : styles.photoOption
                }
              >
                <span>Fort Lauderdale</span>
                <h3>195 miles</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chargeLearnMore}>
          <BlackButtonWithOutline>Learn More</BlackButtonWithOutline>
        </div>
      </div>

      <div className={styles.modelBody}>
        <div className={styles.modelBodyLeft}>
          <span className={styles.spanOne}>Front-Impact Protection</span>
          <span className={styles.spanTwo}>Side-Impact Protection</span>
          <span className={styles.spanThree}>Low Rollover Risk</span>
        </div>
        <div className={styles.modelBodyRight}>
          <div className={styles.rightDesc}>
            <div className={styles.descSubhead}>
            <span>Safety</span>
            <h2>High Impact Protection</h2>
            </div>
            <p>
              Model S is built from the ground up as an electric vehicle, with a
              high-strength architecture and floor-mounted battery pack for
              incredible occupant protection and low rollover risk. Every new
              Model S includes Tesla’s latest active safety features, such as
              Automatic Emergency Braking, at no extra cost.
            </p>
          </div>
          <div className={styles.designInfoButtons}>
            <BlackButtonWithOutline>Order Now</BlackButtonWithOutline>
            <WhiteButton>View Inventory</WhiteButton>
          </div>
        </div>
      </div>

      <div className={styles.aiVision}>
        <div className={styles.aiVisionContainer}>
          <div className={styles.aiStats}>
            <div className={styles.aiStat}>
              <h3>360°</h3>
              <span id={styles.simpleSpan}>
                Rear, side and forward-facing cameras provide maximum visibility
              </span>
              <span id={styles.responseSpan}>Degrees <br/>of visibility</span>
            </div>
            <div className={styles.aiStat}>
              <h3>250 m</h3>
              <span id={styles.simpleSpan}>
                Powerful visual processing at up to 250 meters of range
              </span>
              <span id={styles.responseSpan}>of Powerful <br/>Visual Processing</span>
            </div>
            <div className={styles.aiStat}>
              <h3>{icon}</h3>
              <span id={styles.simpleSpan}>
                Tesla Vision detects nearby cars, helps prevent potential
                collisions and assists with parking
              </span>
              <span id={styles.responseSpan}>Tesla <br/>Vision</span>
            </div>
          </div>
        </div>
        <div className={styles.aiInfo}>
          <div className={styles.aiInfoUp}>
            <div className={styles.aiInfoSubhead}>
              <span>Autopilot</span>
              <h2>Future of Driving</h2>
            </div>
            <p>
              Autopilot enables your car to steer, accelerate and brake
              automatically within its lane under your active supervision,
              assisting with the most burdensome parts of driving. With
              over-the-air software updates, the latest enhancements are
              available instantly. <span>Chat with a Tesla</span> Advisor to
              learn more about Model S.
            </p>
          </div>
          <div className={styles.aiInfoDown}>
            <div className={styles.aiInfoButtons}>
              <BlackButtonWithOutline>Order Now</BlackButtonWithOutline>
              <WhiteButton>View Inventory</WhiteButton>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.autopilotFeatures}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresTitle}>
            <h2>Features</h2>
            <span>
              Enhanced Autopilot and Full Self-Driving capability introduce
              additional features and improve existing functionality to make
              your car more capable over time, including:
            </span>
          </div>
          <div className={styles.featuresSlider}>
            <div className={styles.featuresVideoHolder}>
              <video
                autoPlay={true}
                loop={true}
                muted
                style={
                  feature === 1 ? { display: "block" } : { display: "none" }
                }
                src="/images/features-video-1.mp4"
                type="video/mp4"
              />
              <video
                autoPlay={true}
                loop={true}
                muted
                style={
                  feature === 2 ? { display: "block" } : { display: "none" }
                }
                src="/images/features-video-2.mp4"
                type="video/mp4"
              />
              <video
                autoPlay={true}
                loop={true}
                muted
                style={
                  feature === 3 ? { display: "block" } : { display: "none" }
                }
                src="/images/features-video-3.mp4"
                type="video/mp4"
              />
              <video
                autoPlay={true}
                loop={true}
                muted
                style={
                  feature === 4 ? { display: "block" } : { display: "none" }
                }
                src="/images/features-video-4.mp4"
                type="video/mp4"
              />
            </div>
            <div className={styles.videoSelector}>
              <div
                onClick={() => setFeature(1)}
                className={
                  feature === 1 ? styles.activeVideoOption : styles.videoOption
                }
              >
                <span>San Francisco to Los Angeles</span>
                <h3>383 miles</h3>
              </div>
              <div
                onClick={() => setFeature(2)}
                className={
                  feature === 2 ? styles.activeVideoOption : styles.videoOption
                }
              >
                <span>Berkeley to Lake Tahoe</span>
                <h3>178 miles</h3>
              </div>
              <div
                onClick={() => setFeature(3)}
                className={
                  feature === 3 ? styles.activeVideoOption : styles.videoOption
                }
              >
                <span>Manhattan to Boston</span>
                <h3>211 miles</h3>
              </div>
              <div
                onClick={() => setFeature(4)}
                className={
                  feature === 4 ? styles.activeVideoOption : styles.videoOption
                }
              >
                <span>Fort Lauderdale</span>
                <h3>195 miles</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionSeparator />

      <div className={styles.modelChoice}>
        <div className={styles.modelChoiceContainer}>
          <div className={styles.modelChoiceLeft}>
            <img src={"/images/choice_pic.jpg"} />
          </div>
          <div className={styles.modelChoiceRight}>
            <h2>
              Model S <span>Specs</span>
            </h2>
            <div className={styles.selectors}>
              <span
                onClick={() => setChoice(false)}
                className={
                  choice === true
                    ? styles.spanSelector
                    : styles.activeSpanSelector
                }
              >
                Model S Plaid
              </span>
              <span
                onClick={() => setChoice(true)}
                className={
                  choice === false
                    ? styles.spanSelector
                    : styles.activeSpanSelector
                }
              >
                Model S
              </span>
            </div>
            <div
              style={
                choice === true ? { display: "none" } : { display: "flex" }
              }
              className={styles.detailsPlaid}
            >
              <div className={styles.powerStatsLeft}>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Range (EPA est.)</h3>
                  <span>405 mi</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>1/4 Mile</h3>
                  <span>9.23@155 mph trap speed</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Peak Power</h3>
                  <span>1020 hp</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Wheels</h3>
                  <span>19" or 21"</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Cargo</h3>
                  <span>28 cu ft</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Weight</h3>
                  <span>4,766 lbs</span>
                </div>
              </div>
              <div className={styles.powerStatsRight}>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Acceleration</h3>
                  <span>
                    1.99 s 0-60 mph <em>with rollout subtracted</em>
                  </span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Top Speed</h3>
                  <span>
                    200 mph <em>when equipped with paid hardware upgrades</em>
                  </span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Drag Coefficient</h3>
                  <span>0.208 Cd</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Powertrain</h3>
                  <span>Tri Motor</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Supercharging Max</h3>
                  <span>250 kW</span>
                </div>
              </div>
            </div>
            <div
              style={
                choice === false ? { display: "none" } : { display: "flex" }
              }
              className={styles.detailsSimple}
            >
              <div className={styles.powerStatsLeft}>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Range (EPA est.)</h3>
                  <span>405 mi</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Peak Power</h3>
                  <span>670 hp</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Wheels</h3>
                  <span>19" or 21"</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Cargo</h3>
                  <span>28 cu ft</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Acceleration</h3>
                  <span>3.1 s 0-60 mph</span>
                </div>
              </div>
              <div className={styles.powerStatsRight}>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Top Speed</h3>
                  <span>
                    200 mph <em>when equipped with paid hardware upgrades</em>
                  </span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Drag Coefficient</h3>
                  <span>0.208 Cd</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Weight</h3>
                  <span>4,561 lbs</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Powertrain</h3>
                  <span>Dual Motor</span>
                </div>
                <div className={styles.powerStat}>
                  <div className={styles.border}></div>
                  <h3>Supercharging Max</h3>
                  <span>250 kW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonWithOutline>Compare</ButtonWithOutline>
      </div>

      <SectionSeparator />

      <div className={styles.modelSEnd}>
        <div className={styles.endLeft}>
          <h2>Model S</h2>
          <div className={styles.buttons}>
            <BlackButtonWithOutline>Order Now</BlackButtonWithOutline>
            <WhiteButton>View Inventory</WhiteButton>
          </div>
        </div>
        <div className={styles.endRight}>
          <img src="/images/modelS_sideView.jpg" />
        </div>
      </div>
    </div>
    </>
  );
};

export default ModelS;
