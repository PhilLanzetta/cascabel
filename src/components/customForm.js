import React, { useState } from "react"

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("")

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email })
  }
  return (
    <div className="custom-form">
      {status === "error" && (
        <div
          className="mailchimp-error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && <div className="mailchimp-success">Gracias!</div>}
      {status !== "success" ? (
        <form onSubmit={e => handleFormSubmit(e)}>
          <input
            type="email"
            value={email}
            autoCapitalize="off"
            onChange={handleEmailChange}
            placeholder="Sign up to our newsletter"
            required
          />
          <input type="submit" value="SUBMIT" />
        </form>
      ) : null}
    </div>
  )
}

export default CustomForm
