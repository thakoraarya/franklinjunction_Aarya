import React from 'react'
import { video, img1 } from '../Assets/Assets'
const Landing = () => {
    return (
        <div>
            <div className='w-screen relative'>
                <div className=' absolute  text-fjwhite w-full  top-[40%]'>
                    <p className='text-6xl flex justify-center font-bold relative z-10 '>
                        EMPOWERING RESTAURANTS
                    </p>
                    <p className='text-6xl flex justify-center font-bold relative    z-10'>
                        TO SUCCEED IN THE DIGITAL AGE.
                    </p>
                    <p className='text-3xl flex justify-center font-light relative  z-10'>
                        UNIFIED ECOMMERCE. FULL-SERVICE MANAGEMENT.
                    </p>
                    <br />
                    <p className=' cursor-pointer m-auto w-fit text-xl flex transition-all ease-out duration-200 delay-75 hover:font-bold hover:text-2xl justify-center uppercase relative  z-10 bg-gradient-to-r from-fjorange to-fjpeach rounded-full px-4 py-2'>
                        request a demo
                    </p>

                </div>

                <video autoPlay width="100%" className=' object-cover filter brightness-50'>
                    <source loop src={video} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>


            </div>
            <div className=' flex justify-between'>
                <img className='w-1/2 p-10' src={img1} />
                <div className='flex flex-col justify-center align-middle w-fit p-10'>
                    <div className=' text-4xl font-bold text-fjorange text-center'>
                        <p>Solutions Beyond Software:
                        </p>
                        <p >
                            The Franklin Junction Difference</p>
                        <br />
                    </div>
                    <div className=' text-2xl tracking-widest leading-normal text-fjwhite'>
                        <p> Restaurants do not just need technology, they need solutions.
                        </p>

                        <p> Franklin Junction is the first platform that unifies technology and managed services so restaurants can win the digital age.
                        </p>

                        <p > Put our team of professionals and proprietary digital solutions to work for your restaurant.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing