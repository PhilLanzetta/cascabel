import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from 'react-reveal/Fade'

const Residents = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulResidents {
        nodes {
          name
          id
          dates
          description {
            description
          }
          projectName
          artistUrl
        }
      }
    }
  `)
  return (
    <section className="residents-section">
      <Fade>
        <h2 className="section-title resident-title">Residents</h2>
      </Fade>
      {data.allContentfulResidents.nodes.map(event => {
        const { id, name, dates, projectName, description, artistUrl } = event
        return (
          <Fade key={id}>
            <a href={artistUrl}>
              <div className="resident-row">
                <p>{name}</p>
                <p>{dates}</p>
                <p className="desktop-only">{projectName}</p>
                <p className="desktop-only">{description.description}</p>
                <p className="resident-arrow">→</p>
              </div>
            </a>
          </Fade>
        )
      })}
    </section>
  )
}

export default Residents
