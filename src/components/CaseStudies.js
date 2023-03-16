import React from 'react'
import { c1, c2, c3, c4 } from "../Assets/Assets";
import '../index.css';


const CaseStudies = () => {
  return (
    <div className=''>

      <div className='App px-10 py-5'>
        <p className='text-fjblue text-6xl'>Case Studies</p>
        <div className='flex flex-row flex-wrap justify-center'>
        {/* <div className='grid grid-cols-2 grid-flow-row'> */}

          <div className='relative p-5'>
            <img className='' src={c1} alt="card1" />

            <div className='text-fjwhite bg-fjblue opacity-0 hover:opacity-90 transition-opacity duration-500  h-full w-full border-2  absolute py-24 top-0 left-0   flex-col text-center'>
              <p className=' text-9xl'>37%</p>
              <p className=''>Sales Contribution from Digital within 2 Months</p>
            </div>

          </div>


          <div className='relative p-5'>
            <img className='' src={c2} alt="card1" />

            <div className='text-fjwhite bg-fjblue opacity-0 hover:opacity-90 transition-opacity duration-500  h-full w-full border-2  absolute py-24 top-0 left-0   flex-col text-center'>
              <p className=' text-9xl'>37%</p>
              <p className=''>Sales Contribution from Digital within 2 Months</p>
            </div>

          </div>


          <div className='relative p-5'>
            <img className='' src={c3} alt="card1" />
            <div className='text-fjwhite bg-fjblue opacity-0 hover:opacity-90 transition-opacity duration-500  h-full w-full border-2  absolute py-24 top-0 left-0   flex-col text-center'>
              <p className=' text-9xl'>37%</p>
              <p className=''>Sales Contribution from Digital within 2 Months</p>
            </div>


          </div>

          <div className='relative p-5'>
            <img className='' src={c4} alt="card1" />
            <div className='text-fjwhite bg-fjblue opacity-0 hover:opacity-90 transition-opacity duration-500  h-full w-full border-2  absolute py-24 top-0 left-0   flex-col text-center'>
              <p className=' text-9xl'>37%</p>
              <p className=''>Sales Contribution from Digital within 2 Months</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default CaseStudies