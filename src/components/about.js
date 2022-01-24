import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <p className="about-header">{data.contentfulAbout.heading}</p>
      <p className="about-text">{data.contentfulAbout.text.text}</p>
      <video
        autoPlay
        loop
        muted
        playsInline
        src={data.contentfulAbout.video.file.url}
        alt="video"
        className="about-video"
      ></video>
    </section>
  )
}

export default About
