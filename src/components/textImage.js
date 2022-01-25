import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GatsbyImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

const TextImage = ({ data, picPosition }) => {
  const { title, tagline, text, slideshow, linkedPdf, linkText } = data
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <div className="section-container">
      <section id={title} className="section">
        {picPosition === "left" && (
          <Slider {...settings} className="desktop-section-pic left">
            {slideshow.map(pic => (
              <GatsbyImage image={pic.gatsbyImageData} />
            ))}
          </Slider>
        )}
        <div className="section-details">
          <div>
            <Fade>
              <h2 className="section-title">{title}</h2>
            </Fade>
            <Fade>
              <Slider {...settings} className="mobile-section-pic">
                {slideshow.map(pic => (
                  <GatsbyImage image={pic.gatsbyImageData} />
                ))}
              </Slider>
            </Fade>
            <Fade>
              <p className="section-tagline">{tagline.tagline}</p>
            </Fade>
            <Fade>
              <p className="section-text">{text.text}</p>
            </Fade>
          </div>
          {linkedPdf && (
            <a href={linkedPdf.file.url} className="section-link">
              {linkText}
            </a>
          )}
        </div>
        {picPosition === "right" && (
          <Slider {...settings} className="desktop-section-pic right">
            {slideshow.map(pic => (
              <GatsbyImage image={pic.gatsbyImageData} />
            ))}
          </Slider>
        )}
      </section>
    </div>
  )
}

export default TextImage
