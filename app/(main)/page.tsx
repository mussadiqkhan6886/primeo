import About from '@/sections/About'
import CTA from '@/sections/CTA'
import FAQs from '@/sections/FAQs'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import HowWork from '@/sections/HowWork'
import Layers from '@/sections/Layers'
import Pricing from '@/sections/Pricing'
import Problems from '@/sections/Problems'
import Quote from '@/sections/Quote'
import Result from '@/sections/Result'
import SocialProof from '@/sections/SocialProof'
import Video from '@/sections/Video'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Problems />
      <Layers />
      <About />
      <Quote />
      <Result />
      <Video />
      <Pricing />
      <HowWork />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  )
}

export default Home
