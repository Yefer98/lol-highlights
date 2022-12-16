import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BarMenu from './components/BarMenu'
import Home from './components/Home'
import Plays from './components/Plays'
import Upload from './components/Upload'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/plays',
    element: <Plays />
  },
  {
    path: '/upload',
    element: <Upload />
  }
])

const App = () => {
  return (
    <section className="App">
      <RouterProvider router={routes} />
    </section>
  )
}

export default App
