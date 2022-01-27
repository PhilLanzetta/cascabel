import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import Marquee from "react-fast-marquee"

const AboutES = () => {
  const [controls, setControls] = useState(false)
  const data = useStaticQuery(graphql`
    {
      allContentfulAbout(filter: { node_locale: { eq: "es-MX" } })
      {
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
            <p>Arte</p>
            <p>Eventos</p>
            <p>Música</p>
            <p>Residencias</p>
            <p>Bienestar</p>
            <p>Comunidad</p>
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

export default AboutES
