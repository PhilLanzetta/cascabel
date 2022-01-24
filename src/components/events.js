import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import event1 from "../assets/Event1.png"
import event2 from "../assets/Event2.png"
import event3 from "../assets/Event3.png"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className="event-next" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35.617 72.699"
      >
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35.617 72.699"
      >
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
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  }
  return (
    <div>
      <Slider {...settings}>
        <div className="event-slide">
          <img src={event1} alt="event 1" className="event-pic"></img>
          <p className="event-date">October 2nd - 12pm</p>
          <a href="#" className="event-link">
            Sign up for tickets <span>+</span>
          </a>
        </div>
        <div className="event-slide">
          <img src={event2} alt="event 2" className="event-pic"></img>
          <p className="event-date">January 23rd - 5pm</p>
          <a href="#" className="event-link">
            Sign up for tickets <span>+</span>
          </a>
        </div>
        <div className="event-slide">
          <img src={event3} alt="event 3" className="event-pic"></img>
          <p className="event-date">December 13th - 7pm</p>
          <a href="#" className="event-link">
            Sign up for tickets <span>+</span>
          </a>
        </div>
        <div className="event-slide">
          <img src={event2} alt="event 2" className="event-pic"></img>
          <p className="event-date">October 2nd - 12pm</p>
          <a href="#" className="event-link">
            Sign up for tickets <span>+</span>
          </a>
        </div>
      </Slider>
    </div>
  )
}

export default Events
