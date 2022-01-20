import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomForm from './customForm.js'

const MailForm = () => {
  const postUrl = `https://studio.us5.list-manage.com/subscribe/post?u=d66dace50de5da0a95ea32afd&id=8ac1c74289`

  return (
    <div className="sign-up">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
    
    // </div>
  )
}

export default MailForm
