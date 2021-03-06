import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import Marquee from "react-fast-marquee"

const AboutEN = () => {
  const [controls, setControls] = useState(false)
  const data = useStaticQuery(graphql`
    {
      allContentfulAbout(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          heading
          text {
            text
          }
          video {
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <section className="about">
      <Fade>
        <p className="about-header">
          {data.allContentfulAbout.nodes[0].heading}
        </p>
      </Fade>
      <Fade>
        <p className="about-text">
          {data.allContentfulAbout.nodes[0].text.text}
        </p>
      </Fade>
      <Fade>
        <div className="mobile-marquee-container">
          <Marquee className="mobile-marquee" gradient={false}>
            <p>Art</p>
            <p>Events</p>
            <p>Music</p>
            <p>Residencies</p>
            <p>Wellness</p>
            <p>Community</p>
          </Marquee>
        </div>
      </Fade>
      <Fade>
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={controls}
          src={data.allContentfulAbout.nodes[0].video.file.url}
          alt="video"
          className="about-video"
          onClick={() => setControls(true)}
        ></video>
      </Fade>
    </section>
  )
}

export default AboutEN
