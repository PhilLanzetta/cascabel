import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Seo title="404: not found" />
      <div className="error-text">
        <h1>404</h1>
        <p>not found</p>
        <Link className="btn" to="/">
          Back Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
