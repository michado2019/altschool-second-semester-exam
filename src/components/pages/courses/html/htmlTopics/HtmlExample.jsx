import React from 'react'
import './HtmlExample.css'
import { Helmet } from 'react-helmet-async'

export default function HtmlExample() {

  return (
    <div className="htmlExample-wrapper">
      <Helmet>
        <title>HTML link</title>
        <meta name="description" content="Learn HTML with easy" />
        <link rel="canonical" href="/htmlIntro/example" />
      </Helmet>
      <a
        href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_intro"
        className="htmlExample"
        target="_blank"
        rel="noreferrer"
      >
        Click me to view example!
      </a>
    </div>
  )
}
