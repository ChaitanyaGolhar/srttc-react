import React from 'react'
import { Navbar } from '../components/layout/Navbar'
import Header from '../components/layout/Header'
import Carousel from '../components/Carousel'
import Footer from '../components/layout/Footer'
import { FaqSection } from '../components/FaqSection'
import { MainHome } from '../components/MainHome'
import Teacher from '../components/Teacher'
import Community from '../components/Community'
import Recruiters from '../components/Recruiters'
import Testimonial from '../components/Testimonial'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <MainHome/>
      <Carousel/>
      <Teacher/>
      <Community/>
      <Recruiters/>
      <Testimonial/>
      <FaqSection/>
    </>
  )
}

export default HomePage