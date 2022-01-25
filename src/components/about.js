import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

const About = () => {
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
      <Fade>
        <p className="about-header">{data.contentfulAbout.heading}</p>
      </Fade>
      <Fade>
        <p className="about-text">{data.contentfulAbout.text.text}</p>
      </Fade>
      <Fade>
        <video
          autoPlay
          loop
          muted
          playsInline
          src={data.contentfulAbout.video.file.url}
          alt="video"
          className="about-video"
        ></video>
      </Fade>
    </section>
  )
}

export default About
