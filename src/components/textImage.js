import React from "react"

const TextImage = ({ data }) => {
  const { title, tagline, text, pic, picPosition, link, linkText } = data
  return (
    <div className="section-container">
      <section id={title} className="section">
        {picPosition === "left" && (
          <img
            src={pic}
            alt="cascabel"
            className="desktop-section-pic left"
          ></img>
        )}
        <div className="section-details">
          <div>
            <h2 className="section-title">{title}</h2>
            <img src={pic} alt="cascabel" className="mobile-section-pic"></img>
            <p className="section-tagline">{tagline}</p>
            <p className="section-text">{text}</p>
          </div>
          {link && <a href={link} className="section-link">{linkText}</a>}
        </div>
        {picPosition === "right" && (
          <img
            src={pic}
            alt="cascabel"
            className="desktop-section-pic right"
          ></img>
        )}
      </section>
    </div>
  )
}

export default TextImage
