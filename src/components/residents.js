import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
        <h2 className="section-title resident-title">Residents</h2>
      {data.allContentfulResidents.nodes.map(event => {
        const { id, name, dates, projectName, description, artistUrl } = event
        return (
            <a key={id} href={artistUrl}>
              <div className="resident-row">
                <p>{name}</p>
                <p>{dates}</p>
                <p className="desktop-only">{projectName}</p>
                <p className="desktop-only">{description.description}</p>
                <p className="resident-arrow">→</p>
              </div>
            </a>
        )
      })}
    </section>
  )
}

export default Residents
