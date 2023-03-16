import React from 'react'
import logo from "../Assets/Assets";
import '../index.css';
const Navbar = () => {
    return (

            <header className=' z-50 fixed w-screen top-0 p-6 h-fit  flex flex-wrap justify-between bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100'>
                <div className="flex items-center flex-shrink-0 text-fjwhite mr-20">
                    <img src={logo} className=" w-32 items-center cursor-pointer" alt="franklinjuction logo" />
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-fjwhite border-fjwhite hover:text-fjyellow hover:border-fjpeach">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full sm:hidden block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className=" lg:flex-grow uppercase text-lg">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-fjwhite cool-link mr-4">
                            servicies
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-fjwhite cool-link mr-4">
                            partners
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-fjwhite cool-link">
                            platform
                        </a>
                    </div>
                    <div>
                        <a href="#" className="uppercase inline-block text-sm px-4 py-2 leading-none border rounded text-fjwhite border-white hover:border-transparent duration-300 ease-in hover:text-fjwhite hover:font-bold hover:bg-fjpeach mt-4 lg:mt-0">request a demo</a>
                    </div>
                </div>
            </header>
        // </div>
    )
}

export default Navbar