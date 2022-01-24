import React from "react"


const data = [
  {
   id: 1,
    artist: "Colu Diaz",
    dates: "Nov 23rd - 30th ",
    project: "Project Name",
    desc: "Lorem Ipsum",
  },
  {
   id: 2,
    artist: "Colu Diaz",
    dates: "Nov 23rd - 30th ",
    project: "Project Name",
    desc: "Lorem Ipsum",
  },
  {
   id: 3,
    artist: "Colu Diaz",
    dates: "Nov 23rd - 30th ",
    project: "Project Name",
    desc: "Lorem Ipsum",
  },
  {
   id: 4,
    artist: "Colu Diaz",
    dates: "Nov 23rd - 30th ",
    project: "Project Name",
    desc: "Lorem Ipsum",
  },
  {
   id: 5,
    artist: "Colu Diaz",
    dates: "Nov 23rd - 30th ",
    project: "Project Name",
    desc: "Lorem Ipsum",
  },
]

const Residents = () => {
  return (
    <section className="residents-section">
      <h2 className="section-title resident-title">Residents</h2>
      {data.map((event => {
       const {id, artist, dates, project, desc} = event
       return <div key={id} className="resident-row">
        <p>{artist}</p>
        <p>{dates}</p>
        <p className="desktop-only">{project}</p>
        <p className="desktop-only">{desc}</p>
       </div>
      }))}
    </section>
  )
}

export default Residents
