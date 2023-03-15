import React from 'react'
import logo from "../Assets/Assets";
import '../index.css';
const Navbar = () => {
    return (
        <div className=' z-50 sticky top-0  w-screen  h-fit flex flex-row bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100'>

            <img src={logo} className=" cursor-pointer w-2/12 ml-48 p-2" alt="franklinjuction logo" />

            <ul className='list-none flex flex-row m-auto gap-20 text-fjwhite uppercase font-bold'>
                <li className=' cursor-pointer cool-link'>Solutions</li>
                <li className=' cursor-pointer cool-link'>Partners</li>
                <li className=' cursor-pointer cool-link'>Platform</li>
                <li>   <button className=' text-sm text-fjyellow hover:border hover:text-fjwhite hover:bg-fjorange uppercase border  rounded-full px-3 py-2 inline-block after:block'>
                    request a demo
                </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar