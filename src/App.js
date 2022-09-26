import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movie from './pages/Movie'
import NavBar from './components/NavBar'
import "../src/asset/styles/app.scss";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<Movie />} />
            </Routes>
        </Router>
    )
}

export default App