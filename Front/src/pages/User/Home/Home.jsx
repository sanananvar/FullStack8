import React from 'react'
import style from "./style.module.css"
import Hero from '../../../components/Hero/Hero'
import Servicess from '../../../components/servicess/Servicess'
import About from '../../../components/AboutUs/About'
import Team from '../../../components/Team/Team'
import OurServicess from '../../../components/OurServicess/OurServicess'
import Pricing from '../../../components/Pricing/Pricing'
import {Helmet } from "react-router-dom"
function Home() {
  return (
    <>
    <Helmet>
      <title>
        Home
      </title>
    </Helmet>

      <Hero/>
      <Servicess/>
      <About/>
      <Team/>
      <OurServicess/>
      <Pricing/>
    </>
  )
}

export default Home
