import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Marquee from "react-fast-marquee"

const About = () => {
  const [controls, setControls] = useState(false);
  const data = useStaticQuery(graphql`
    {
      contentfulAbout {
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
  `)
  return (
    <section className="about">
        <p className="about-header">{data.contentfulAbout.heading}</p>
        <p className="about-text">{data.contentfulAbout.text.text}</p>
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
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={controls}
          src={data.contentfulAbout.video.file.url}
          alt="video"
          className="about-video"
          onClick={() => (setControls(true))}
        ></video>
    </section>
  )
}

export default About
