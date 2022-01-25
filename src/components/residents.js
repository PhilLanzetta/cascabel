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
        const { id, name, dates, projectName, description } = event
        return (
          <Fade>
            <div key={id} className="resident-row">
              <p>{name}</p>
              <p>{dates}</p>
              <p className="desktop-only">{projectName}</p>
              <p className="desktop-only">{description.description}</p>
            </div>
          </Fade>
        )
      })}
    </section>
  )
}

export default Residents
