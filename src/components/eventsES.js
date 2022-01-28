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
    <div
      className="event-next"
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
      className="event-prev"
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

const EventsES = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulEvents(
        filter: { node_locale: { eq: "es-MX" } }
        sort: { fields: orderNumber }
      ) {
        nodes {
          id
          eventDates
          eventImage {
            gatsbyImageData
            description
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
          infinite: false,
        },
      },
    ],
  }
  return (
    <section id="Eventos" className="section-container events-section">
      <Fade>
        <h2 className="section-title">Eventos</h2>
      </Fade>
      <div>
        <Slider {...settings}>
          {data.allContentfulEvents.nodes.map(event => {
            return (
              <div key={event.id} className="event-slide">
                <GatsbyImage
                  image={event.eventImage.gatsbyImageData}
                  alt={event.eventImage.description}
                  className="event-pic"
                />
                <p className="event-date">{event.eventDates}</p>
                {event.eventLink && (
                  <a
                    href={event.eventLink}
                    className="event-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Registrarse para boletos <span>+</span>
                  </a>
                )}
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default EventsES
