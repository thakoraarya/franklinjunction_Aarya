import React from 'react'
import { us } from '../Assets/Assets'

const About = () => {
  return (
    <div className='App flex flex-col text-fjwhite p-10'>
      <div className='flex'>
        <img className='w-2/5' src={us} />
        <div className='flex flex-col justify-evenly text-justify p-10'>
          <p className='text-6xl'> A passion for restaurants, wired for digital: About Us</p>

          <p className='text-4xl font-thin'>Leading in Operations, Technology, and Marketing.</p>

          <p>As leaders in restaurant operations, machine learning, and data technology, we approach the business with a thoughful approach to eCommerce.</p>
          <p>Our team members grew up working in restaurants, leading operations, technology, and marketing at some of the most recognizable hospitality brands in the world. As owners and C-suite executives, we know how difficult it is to keep up with rapidly evolving technology while also struggling with the bandwidth to optimally implement newly acquired tools.</p>
          <p>That's why we have taken those learnings and our best practices to build proven technology solutions that succeed in driving sustained profitable growth to restaurants, and stand with our clients as management partners when necessary.</p>
        </div>
      </div>
    </div>
  )
}

export default About