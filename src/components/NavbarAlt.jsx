import React from 'react'
import main from '../assets/uploads/2024/03/main.jpeg'

const NavbarAlt = () => {
  return (
    <>
        <div className='relative h-[100vh]'>
            <div
            className='h-[100vh]  absolute top-0 w-[100%] z-[-100] '
            style={{background: `url(${main})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", filter: "brightness(70%)"}}></div>
            
            {/* content starts */}
            <div className='flex flex-col items-center justify-evenly h-[100vh] text-white'>
                <div><h1 className=' text-6xl font-thin'><span className=' font-semibold'>DAVIET</span> WELCOMES YOU</h1></div>
                <div className='flex flex-col items-center gap-4'>
                    <h3 className=' text-6xl uppercase' >The Place of</h3>
                    <h3 className=' text-5xl uppercase'>Transformation</h3>
                </div>

                <div className=' flex mx-auto w-[80%] border h-12 items-center rounded-md rounded-l-full pr-2  bg-white'>
                    <div className='bg-[#0369a0] w-40    text-white h-12 ml-[-5px] px-4 rounded-l-full  flex items-center'>
                        <span className=' font-bold'>latest updates</span>
                    </div>
                    <marquee  direction="left">
                        <div className='flex items-center  text-black gap-10'>
                            <div>arrey! ye to latest news hai</div>
                            <div>arrey! ye to latest news hai</div>
                            <div>arrey! ye to latest news hai</div>
                            <div>arrey! ye to latest news hai</div>
                            <div>arrey! ye to latest news hai</div>
                            <div>arrey! ye to latest news hai</div>
                        </div>
                    </marquee>
                </div>

                <div className='flex justify-center gap-24 w-full '>
                    <div className='h-40 w-44 flex items-center justify-center text-2xl border rounded-xl bg-white text-black bg-opacity-60 shaodw-xl '>News</div>
                    <div className='h-40 w-44 flex items-center justify-center text-2xl border rounded-xl bg-white text-black bg-opacity-60 shaodw-xl '>Program</div>
                    <div className='h-40 w-44 flex items-center justify-center text-2xl border rounded-xl bg-white text-black bg-opacity-60 shaodw-xl '>Achivements</div>
                    <div className='h-40 w-44 flex items-center justify-center text-2xl border rounded-xl bg-white text-black bg-opacity-60 shaodw-xl '>Campus Life</div>
                </div>

            </div>
            {/* content ends */}

        </div>
        {/* <div className='h-[100vh]'></div> */}
    </>

    
  )
}

export default NavbarAlt