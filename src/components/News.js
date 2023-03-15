import React from 'react'
import { card2 } from '../Assets/Assets'
const News = () => {
  return (
    <>
      <div className='App'>
        <p className='text-6xl text-fjpeach'>The Latest News</p>
      </div>
      <div className='grid grid-flow-col gap-x-4 p-5 overflow-y-scroll'>

        <div className='w-full grid  gap-x-4 gird-flow-row grid-cols-4'>
          {/* card */}
          <div className=' hover:bg-fjblue hover:scale-105 duration-150 ease-out  flex flex-col  h-fit items-center rounded-xl border-fjblue border'>

            <img src={card2} alt="card1" className=' rounded-t-xl w-full' />
            <p className='text-md p-4 text-fjyellow font-bold uppercase'>Franklin Junction Named to Fast Company's Annual List of the World's Most Innovative Companies for 2023
            </p>
          </div>

          {/* card */}
          <div className='  hover:bg-fjblue hover:scale-105 duration-150 ease-out  flex flex-col  h-fit items-center rounded-xl border-fjblue border'>

            <img src={card2} alt="card1" className=' rounded-t-xl w-full' />
            <p className='text-md p-4 text-fjyellow font-bold uppercase'>Franklin Junction Named to Fast Company's Annual List of the World's Most Innovative Companies for 2023
            </p>
          </div>

          {/* card */}
          <div className='  hover:bg-fjblue hover:scale-105 duration-150 ease-out  flex flex-col  h-fit items-center rounded-xl border-fjblue border'>

            <img src={card2} alt="card1" className=' rounded-t-xl w-full' />
            <p className='text-md p-4 text-fjyellow font-bold uppercase'>Franklin Junction Named to Fast Company's Annual List of the World's Most Innovative Companies for 2023
            </p>
          </div>

          {/* card */}
          <div className='  hover:bg-fjblue hover:scale-105 duration-150 ease-out  flex flex-col  h-fit items-center rounded-xl border-fjblue border'>

            <img src={card2} alt="card1" className=' rounded-t-xl w-full' />
            <p className='text-md p-4 text-fjyellow font-bold uppercase'>Franklin Junction Named to Fast Company's Annual List of the World's Most Innovative Companies for 2023
            </p>
          </div>

        </div>




      </div>
    </>
  )
}

export default News