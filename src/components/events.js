import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Fade from "react-reveal/Fade"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className="event-next" onClick={onClick}>
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
    <div className="event-prev" onClick={onClick}>
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

const Events = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulEvents {
        nodes {
          eventDates
          eventImage {
            gatsbyImageData
          }
          eventLink
        }
      }
    }
  `)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  }
  return (
    <section id="Events" className="section-container events-section">
      <Fade>
        <h2 className="section-title">Events</h2>
      </Fade>
      <div>
        <Slider {...settings}>
          {data.allContentfulEvents.nodes.map(event => {
            return (
              <div className="event-slide">
                <GatsbyImage
                  image={event.eventImage.gatsbyImageData}
                  alt="fill this in"
                  className="event-pic"
                />
                <p className="event-date">{event.eventDates}</p>
                <a href={event.eventLink} className="event-link">
                  Sign up for tickets <span>+</span>
                </a>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default Events
