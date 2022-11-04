import React from 'react'
import './Sign.css'
import { Helmet } from 'react-helmet-async'

export default function Sign() {
  const name = 'Mike'
  return (
    <div className='signWrapper'>
      <Helmet>
        <title>Sign in page</title>
        <meta name="description" content="Sign in here" />
        <link rel="canonical" href="/sign" />
      </Helmet>
        <form className='signForm'>
        <label htmlFor="first_name" className='signForm-labels'>First name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="signInput"
          id="first_name"
        />
        <label htmlFor="Last_name" className='signForm-labels'>Last name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          className="signInput"
          id="last_name"
        />
        <label htmlFor="email" className='signForm-labels'>Email</label>
        <input
          type="text"
          placeholder="yourname@gmail.com"
          className="signInput"
          id="email"
        />
        <label htmlFor="message" className='signForm-labels'>Message</label>
        <textarea
          placeholder="Send me a message and I&#39;ll reply as soon as possible"
          className="signInput"
          id="message"
        />
        <input type="checkbox" id="checkbox" name="" value="" />
        <label htmlFor="checkbox" className='signForm-labels' id='text_area'>
          You agree to providing your data to <span id="name">{name}</span> who
          may contact you.
        </label>
        <button className="signInput" id="btn__submit">
          Sign in
        </button>
        </form>
    </div>
  )
}
