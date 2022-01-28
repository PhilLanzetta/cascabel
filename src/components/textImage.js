import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GatsbyImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div
      className="slideshow-next"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="go to next"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.617 72.699">
        <g
          id="Group_61"
          data-name="Group 61"
          transform="translate(-1641.773 -5563.813)"
        >
          <line
            id="Line_93"
            data-name="Line 93"
            x2="34.163"
            y2="36.163"
            transform="translate(1642.5 5564.5)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
          <line
            id="Line_94"
            data-name="Line 94"
            y1="36.163"
            x2="34.163"
            transform="translate(1642.5 5599.663)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className="slideshow-prev"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="go to previous"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.617 72.699">
        <g
          id="Group_62"
          data-name="Group 62"
          transform="translate(0.727 0.687)"
        >
          <line
            id="Line_93"
            data-name="Line 93"
            x1="34.163"
            y2="36.163"
            transform="translate(0)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
          <line
            id="Line_94"
            data-name="Line 94"
            x1="34.163"
            y1="36.163"
            transform="translate(0 35.163)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
  )
}

const TextImage = ({ data, picPosition }) => {
  const { title, tagline, text, slideshow, linkedPdf, linkText } = data
  const mobileSettings = {
    infinite: true,
    fade: true,
    speed: 500,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="section-container">
      <section id={title} className="section">
        {picPosition === "left" && (
          <Slider {...settings} className="desktop-section-pic left">
            {slideshow.map(pic => (
              <GatsbyImage
                key={pic.id}
                image={pic.gatsbyImageData}
                alt={pic.description}
              />
            ))}
          </Slider>
        )}
        <div className="section-details">
          <div>
            <Fade>
              <h2 className="section-title">{title}</h2>
            </Fade>
            <Slider {...mobileSettings} className="mobile-section-pic">
              {slideshow.map(pic => (
                <GatsbyImage
                  key={pic.id}
                  image={pic.gatsbyImageData}
                  alt={pic.description}
                />
              ))}
            </Slider>
            <Fade>
              <p className="section-tagline">{tagline.tagline}</p>
            </Fade>
            <Fade>
              <p className="section-text">{text.text}</p>
            </Fade>
          </div>
          {linkedPdf && (
            <a
              href={linkedPdf.file.url}
              className="section-link"
              target="_blank"
              rel="noreferrer"
            >
              {linkText}
            </a>
          )}
        </div>
        {picPosition === "right" && (
          <Slider {...settings} className="desktop-section-pic right">
            {slideshow.map(pic => (
              <GatsbyImage
                key={pic.id}
                image={pic.gatsbyImageData}
                alt={pic.description}
              />
            ))}
          </Slider>
        )}
      </section>
    </div>
  )
}

export default TextImage
