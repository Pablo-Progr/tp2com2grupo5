import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'
import { LengProgramacion } from '../data/data'

const Home = () => {

  const [lengProgramacion, setLengProgramacion] = useState(LengProgramacion)

  return (
    <div>
        <Header/>
        <MainHome lengProgramacion={lengProgramacion}/>
        <Footer/>
    </div>
  )
}

export default Home