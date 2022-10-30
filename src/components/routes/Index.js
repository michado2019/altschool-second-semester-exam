import { Home } from '@mui/icons-material';
import React from 'react'
import {Routes, Route} from 'react-router-dom';

export default function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}
