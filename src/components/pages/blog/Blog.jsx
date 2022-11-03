import React from 'react'
import './Blog.css'
import { Helmet } from 'react-helmet-async'

export default function Blog() {
  return (
    <div className='blogWrapper'>
      <Helmet>
        <title>Blogpage</title>
        <meta name="description" content="Welcome to my Blogpage" />
        <link rel="canonical" href="/blog" />
      </Helmet>
        <h1>Blog</h1>
        <div>
        Coming soonest!!!
        </div>
    </div>
  )
}
