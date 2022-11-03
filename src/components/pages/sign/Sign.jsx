import React from 'react'
import './Sign.css'
import { Helmet } from 'react-helmet-async'

export default function Sign() {
  return (
    <div>
      <Helmet>
        <title>Sign in page</title>
        <meta name="description" content="Sign in here" />
        <link rel="canonical" href="/sign" />
      </Helmet>
        Sign
    </div>
  )
}
