import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
import Portfolio from '../pages/portfolio/Portfolio'
import SayHi from '../pages/sayhi/SayHi'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/hello/:name" element={<SayHi />} />
        </Routes>
    )
}

export default Routing
