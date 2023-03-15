import React from 'react'
import { linkedin, mail } from '../Assets/Assets'
import '../App.css'

const Footer = () => {
  return (
    <div className='App text-fjwhite w-screen h-fit bg-fjpeach'>
      <ul className='list-none flex w-4/6 justify-evenly h-full py-20'>
        <li className=' cursor-pointer cool-link hover:text-fjwhite'>SOLUTIONS    </li>
        <li className=' cursor-pointer cool-link hover:text-fjwhite'> PLATFORM   </li>
        <li className=' cursor-pointer cool-link hover:text-fjwhite'>  PARTNERS  </li>
        <li className=' cursor-pointer cool-link hover:text-fjwhite'>   ABOUT </li>
        <li className=' cursor-pointer cool-link hover:text-fjwhite'>    NEWS</li>
      </ul>

      <div className='flex justify-start pl-20 pb-20'>
        <div className='flex mx-20'>
          <img className=' h-10' src={mail} alt="mail" />
          <a href='mailto: info@franklinjunction.com' className=' p-2'>info@franklinjunction.com</a>
        </div>
        <div className='flex '>
          <img className=' h-10' src={linkedin} alt="linkedin" />
          <a className='p-2' href="https://franklinjunction.com/#:~:text=info%40franklinjunction.com,LinkedIn">Linkedin</a>
        </div>
      </div>

    </div>
  )
}

export default Footer