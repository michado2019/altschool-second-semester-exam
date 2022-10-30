import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Sign from '../pages/sign/Sign';

export default function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sign" element={<Sign />} />
        </Routes>
    </div>
  )
}
