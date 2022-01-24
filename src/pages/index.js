import React from "react"
import "react-h5-audio-player/lib/styles.css"
import "../styles/main.css"
import Weather from "../components/weather"
import MailForm from "../components/mailForm"
import Seo from "../components/seo"
import logo from "../assets/cascabel_logo.svg"
import artPic from "../assets/artPic.png"
import musicPic from "../assets/musicPic.png"
import video from "../assets/Video.png"
import AudioPlayer from "react-h5-audio-player"
import Events from "../components/events"
import TextImage from "../components/textImage"
import Residents from '../components/residents'

export default function Home() {
  const artObject = {
    title: "Art",
    tagline: "An open air gallery space and residencies",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    pic: artPic,
    picPosition: "right",
  }

  const musicObject = {
    title: "Music",
    tagline: "World class sound in the heart of Merida",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    pic: musicPic,
    picPosition: "left",
    link: "www.google.com",
    linkText: "Download Specs +",
  }

  const residencyObj = {
    title: "Residencies",
    tagline:
      "We regularly open our doors to talented artists and musicians from Mexico and beyond",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    pic: artPic,
    picPosition: "right",
  }

  const wellnessObj = {
    title: "Wellness",
    tagline:
      "Yoga Classes lead daily by the wonderful and talented Ximena Ezeta",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    pic: musicPic,
    picPosition: "left",
  }

  const communObj = {
    title: "community",
    tagline: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    pic: artPic,
    picPosition: "right",
  }
  return (
    <>
      <Seo title="Home" />
      <div className="background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video"
          aria-hidden="true"
        >
          <source
            src="https://res.cloudinary.com/philcode2021/video/upload/v1633092534/Peacock_Flower_1_pq9wqn.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <main>
        <section className="hero">
          <header>
            <img src={logo} alt="Casa Cascabel" className="header" />
            <div className="at-cascabel">
              <a href="https://www.instagram.com/casacascabel.studio">
                &#64;casacascabel.studio
              </a>
            </div>
          </header>
          <article className="info">
            <div className="dynamic-content">
              <Weather />
              <div className="audio-player">
                <AudioPlayer
                  src="https://res.cloudinary.com/philcode2021/video/upload/v1633106898/LEMAT_-_Ensemble_Of_Organic_Amazements_Vol._I_-_01_Wander_xhpdx8.mp3"
                  showJumpControls={false}
                  customVolumeControls={[]}
                  customAdditionalControls={[]}
                  layout="horizontal-reverse"
                />
                <div className="track-info">
                  <p>LEMAT</p>
                  <p className="track-details">
                    Wander - Ensemble Of Organic Amazements, Vol. I
                  </p>
                </div>
              </div>
              <MailForm />
            </div>
          </article>
        </section>
        <section className="about">
          <p className="about-header">
            A home for creative freedom, community &amp; collaboration
          </p>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sinLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate
          </p>
        </section>
        <img src={video} alt="video thumbnail"></img>
        <nav className="desktop-nav">
          <a href="#art">Art</a>
          <a href="#events">Events</a>
          <a href="#music">Music</a>
          <a href="#wellness">Wellness</a>
          <a href="#community">Community</a>
        </nav>
        <TextImage data={artObject} />
        <section id="events" className="section-container events-section">
          <h2 className="section-title">Events</h2>
          <Events />
        </section>
        <TextImage data={musicObject} />
        <TextImage data={residencyObj} />
        <TextImage data={wellnessObj} />
        <TextImage data={communObj} />
        <Residents />
        <section className="visit-us-container">
          <div className="visit-us">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="98.774"
              height="157.406"
              viewBox="0 0 98.774 157.406"
            >
              <g
                id="Group_52"
                data-name="Group 52"
                transform="translate(12095.197 -8185)"
              >
                <path
                  id="Path_84"
                  data-name="Path 84"
                  d="M103.218,68.091c0-8.93,6.116-13.2,15.388-14.5a17.709,17.709,0,0,1,9.311,2.824v5.724h-2.446l-1.263-3.625a8.155,8.155,0,0,0-6.352-2.71c-5.405,0-9.193,4.007-9.193,11.258,0,6.335,3.669,12.326,9.982,12.326a7.992,7.992,0,0,0,5.366-2.328l2.051-4.351h2.367l-.908,6.106a40.606,40.606,0,0,1-9.9,2.862c-7.457,0-14.4-4.732-14.4-13.585"
                  transform="translate(-12171.053 8145.282)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                />
                <path
                  id="Path_83"
                  data-name="Path 83"
                  d="M172.672,127.665l2.8-.458,9.509-24.385,3.512-.84,9.864,25.263,2.92.42-.2,1.526-6.116-.114-5.011.114-.2-1.526,3.156-.5-2.525-6.831h-9.548l-2.407,6.831,3.275.5-.2,1.526-4.537-.114-4.1.114Zm17.005-9.235-3.67-10.075-.2-2.1-4.261,12.174Z"
                  transform="translate(-12222.237 8109.201)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                />
                <path
                  id="Path_82"
                  data-name="Path 82"
                  d="M92.541,194.574l-.868-5.61h3.038l1.342,3.358A7.4,7.4,0,0,0,101.5,194.8c3,0,4.972-1.794,4.972-4.5,0-2.1-1.263-3.626-3.867-4.732l-4.774-2.137c-3.63-1.641-5.287-3.664-5.287-6.526,0-3.778,3.393-6.526,9.785-7.823a14.5,14.5,0,0,1,7.615,2.213v5.5h-2.328l-1.144-3.511a6.25,6.25,0,0,0-4.656-1.908c-2.88,0-4.735,1.488-4.735,3.816,0,1.756,1.1,3.015,3.433,4.045l4.774,2.1c4.1,1.832,5.879,3.969,5.879,7.174,0,4.274-3.354,7.136-10.337,8.663a13.749,13.749,0,0,1-8.286-2.595"
                  transform="translate(-12162.544 8059.173)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                />
                <path
                  id="Path_81"
                  data-name="Path 81"
                  d="M171.323,227.912c0-8.93,6.116-13.2,15.388-14.5a17.709,17.709,0,0,1,9.311,2.824v5.724h-2.446l-1.263-3.625a8.155,8.155,0,0,0-6.352-2.71c-5.405,0-9.193,4.007-9.193,11.258,0,6.335,3.669,12.326,9.982,12.326a7.992,7.992,0,0,0,5.366-2.328l2.052-4.351h2.367l-.908,6.106a40.607,40.607,0,0,1-9.9,2.862c-7.457,0-14.4-4.732-14.4-13.585"
                  transform="translate(-12221.243 8026.123)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                />
                <path
                  id="Path_80"
                  data-name="Path 80"
                  d="M97.67,307.807l2.8-.458,9.509-24.385,3.512-.84,9.864,25.263,2.92.42-.2,1.526-6.116-.114-5.011.114-.2-1.526,3.156-.5-2.525-6.831h-9.548l-2.407,6.831,3.275.5-.2,1.526-4.537-.114-4.1.114Zm17.005-9.235-3.67-10.075-.2-2.1-4.261,12.174Z"
                  transform="translate(-12166.964 7974.892)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                />
                <path
                  id="Path_79"
                  data-name="Path 79"
                  d="M193.424,359.269l3.354-.5V336.029l-3.354-.5.2-1.527,5.248.114,8.68-.114c5.05-.038,7.457,2.938,7.457,5.839,0,3.053-2.683,5.686-6.55,6.564,5.326.229,8.128,3.015,8.128,6.6,0,4.961-4.459,6.945-10.575,7.785l-7.141-.114-5.248.114Zm11.284-13.433a5.228,5.228,0,0,0,5.208-5.533c0-2.671-1.5-4.5-4.656-4.541l-3.512.229v9.846Zm6.786,7.289c0-3.168-2.209-5.5-5.918-5.5h-3.827v11.182l3.117.229c5.011,0,6.629-3.244,6.629-5.915"
                  transform="translate(-12237.53 7936.21)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                />
                <path
                  id="Path_78"
                  data-name="Path 78"
                  d="M114.6,425.926l3.354-.5V402.685l-3.354-.5.2-1.527,5.445.115,16.1-.115.395,7.06h-1.617l-2.288-4.961-9.9-.115v9.846l5.09-.153,1.578-4.045h1.657l-.395,4.961.395,5.266H129.59l-1.578-4.045-5.09-.152v11.143l10.338-.115L135.9,420.2h1.775l-1.342,7.251-16.1-.115-5.445.115Z"
                  transform="translate(-12179.438 7886.512)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                />
                <path
                  id="Path_77"
                  data-name="Path 77"
                  d="M197.924,470.46l3.354-.5V447.22l-3.354-.5.2-1.527,5.445.115,5.839-.115.2,1.527-3.354.5V470l9.43-.115,2.762-5.266H220.1l-1.341,7.365-15.191-.114-5.445.114Z"
                  transform="translate(-12240.847 7853.308)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                />
                <ellipse
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="48.387"
                  cy="77.703"
                  rx="48.387"
                  ry="77.703"
                  transform="translate(-12094.197 8186)"
                  fill="none"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>

            <a href="https://goo.gl/maps/Tpuy8gqThzzkey2Z9">
              <h2>Visit Us</h2>
            </a>
            <p>Calle 50 560A, Por 73A Y 75, Centro, Merida</p>
          </div>
        </section>
      </main>
    </>
  )
}
