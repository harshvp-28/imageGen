import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenBtn from '../components/GenBtn'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Steps></Steps>
      <Description></Description>
      <Testimonials></Testimonials>
      <GenBtn></GenBtn>
    </div>
  )
}

export default Home