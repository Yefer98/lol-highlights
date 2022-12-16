import React from 'react'
import '../styles/Home.css'
import BarMenu from './BarMenu'

const Home = () => {
  return (
    <>
    <BarMenu />
    <main className='container'>
      <div className='banner'>
        <h1>League of Legends Highlights</h1>
      </div>
    </main>
    </>
  )
}

export default Home