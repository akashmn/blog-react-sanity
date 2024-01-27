import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Blog from './pages/Blog'
import SinglePost from './pages/SinglePost'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <BrowserRouter>

      <Header /> //navbar

      <Routes>

        <Route exact path="/"> //homepage
          <Homepage />
        </Route>
        <Route exact path="/blog"> //blog
          <Blog />
        </Route>
        <Route exact path="/blog/:slug"> //single post
          <SinglePost />
        </Route>
        <Route path="*"> //error page 404 not found
          <ErrorPage />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App