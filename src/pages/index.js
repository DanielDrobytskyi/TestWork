import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import OurWorks from '../components/OurWorks'
import Contact from '../components/contacts'


export default () => {


  return (
    <Layout>
      <Hero />
      <Services />
      <OurWorks />
      <Contact />
    </Layout>
  )
}
