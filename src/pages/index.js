import React from "react"
import "react-h5-audio-player/lib/styles.css"
import "../styles/main.css"
import Weather from "../components/weather"
import MailForm from "../components/mailForm"
import Seo from "../components/seo"
import logo from "../assets/cascabel_logo.svg"
import AudioPlayer from "react-h5-audio-player"

export default function Home() {
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
        <header>
          <img src={logo} alt="Casa Cascabel" className="header" />
          <div className="at-cascabel">
            <a href="https://www.instagram.com/casacascabel.studio">
              &#64;casacascabel.studio
            </a>
          </div>
        </header>
        <section className="content">
          <div className="info">
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
            </div>
            <p className="about-text">
              A home for creative freedom, community, and collaboration
            </p>
          </div>
          <MailForm />
        </section>
      </main>
    </>
  )
}
