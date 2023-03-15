import React from 'react'
import { c1, c2, c3, c4 } from "../Assets/Assets";
import '../index.css';


const CaseStudies = () => {
  return (
    <div>

      <div className='App px-20 py-10'>
        <p className='text-fjblue text-6xl'>Case Studies</p>
        <div className='grid grid-cols-2 grid-flow-row p-10 '>

          <div className='relative p-10'>
            <img className='w-full' src={c1} alt="card1" />

            <div className='text-fjwhite bg-fjblue opacity-0 hover:opacity-100 transition-opacity duration-500 w-full h-full absolute py-24 top-0 left-0   flex-col text-center'>
              <p className='text-9xl'>37%</p>
              <p className=''>Sales Contribution from Digital within 2 Months</p>
            </div>

          </div>


          <div className='relative p-10'>
            <img className='w-full' src={c1} alt="card1" />

            <div className='text-fjwhite bg-fjblue opacity-0 hover:opacity-100 transition-opacity duration-500 w-full h-full absolute py-24 top-0 left-0   flex-col text-center'>
              <p className='text-9xl'>37%</p>
              <p className=''>Sales Contribution from Digital within 2 Months</p>
            </div>

          </div>


          <div className='relative p-10'>
            <img className='w-full' src={c1} alt="card1" />
            <div className='text-fjwhite bg-fjblue opacity-0 hover:opacity-100 transition-opacity duration-500 w-full h-full absolute py-24 top-0 left-0   flex-col text-center'>
              <p className='text-9xl'>37%</p>
              <p className=''>Sales Contribution from Digital within 2 Months</p>
            </div>


          </div>

          <div className='relative p-10'>
            <img className='w-full' src={c1} alt="card1" />
            <div className='text-fjwhite bg-fjblue opacity-0 hover:opacity-100 transition-opacity duration-500 w-full h-full absolute py-24 top-0 left-0   flex-col text-center'>
              <p className='text-9xl'>37%</p>
              <p className=''>Sales Contribution from Digital within 2 Months</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default CaseStudies