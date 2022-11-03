import React from 'react'
import './Css.css'
import { Helmet } from 'react-helmet-async'

export default function Css() {
  return (
    <div className='cssWrapper'>
      <Helmet>
        <title>CSS Tutorial</title>
        <meta name="description" content="Learn CSS with easy" />
        <link rel="canonical" href="/courses/css" />
      </Helmet>
       <h1 className='cssCss'>Upcoming!</h1>
    </div>
  )
}
