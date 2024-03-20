import React from 'react'
import curve from '../assets/curve.png'
import davietLogo from '../assets/davietLOGO.png'
import namedLogo from '../assets/namedLogo.png'

const Navbar = () => {
  return (
    <div className='bg-white shadow-md'>

        <div className='flex bg-[#0369a0] text-white font-medium items-center justify-center list-none gap-5 h-10'>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
        </div>

        <div className='flex items-center justify-evenly  mt-[-20px] z-10 relative'>
            {/* <img src={namedLogo} className='h-16 mb-12' alt="" /> */}
            <div className='flex flex-col items-center mb-12'>
                <h1 className=' text-4xl font-bold'>DAV INSTITUTE </h1>
                <h1 className='  font-semibold'>OF ENGINEERING AND TECHNOLOGY </h1>
            </div>
            <img src={davietLogo} alt="" className='h-40 ml-4 ' />
            <img src={namedLogo} className='h-16 mb-12' alt="" />
        </div>

        <div className='flex bg-[#0369a0] text-white font-semibold items-center justify-center list-none gap-5 mt-[-60px]'>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li><img src={curve} alt="" className='z-10'  /></li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
            <li>Administration</li>
        </div>

    </div>
  )
}

export default Navbar