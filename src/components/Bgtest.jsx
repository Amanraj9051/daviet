import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import first from '../assets/uploads/2024/03/main.jpeg'

const Bgtest = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${first})`,
        height: '350px'
      };
  return (

    <div>
        <div className={`bg-fixed bg-no-repeat bg-cover`}
            style={backgroundImageStyle}    
        >
            <div className='h-[100%] bg-black bg-opacity-60 flex justify-around flex-wrap'>
                <div className=' text-white flex flex-col justify-center items-center m-5 p-5 rounded-xl '>
                    <h1 className=' text-semibold text-7xl'>DAVIET</h1>
                    <h1 className='text-bold uppercase text-xl'>ENGINEERING futures </h1>
                    <h1 className='text-bold uppercase text-xl'>through innovation</h1>
                    <button className='bg-white mt-3 w-full hover:scale-90 active:border-blue-900 border-2 text-black rounded-xl px-10 py-2 hover:bg-transparent hover:text-white duration-150 uppercase font-bold' >yes</button>
                </div>
                <div>
                    
                </div>

                <div className='grid grid-cols-2 gap-5 my-3'>
                    <div className=' text-white flex flex-col  rounded-xl p-2 justify-center items-center '>
                        <h1 className=' text-semibold text-5xl'>900+</h1>
                        <h1 className='text-bold uppercase text-xl'>placement</h1>
                    </div>
                    <div className=' text-white flex flex-col  rounded-xl p-2  justify-center items-center '>
                        <h1 className=' text-semibold text-5xl'>64LPA</h1>
                        <h1 className='text-bold uppercase text-xl'>highest package</h1>
                    </div>
                    <div className=' text-white flex flex-col  rounded-xl p-2  justify-center items-center '>
                        <h1 className=' text-semibold text-5xl'>120+</h1>
                        <h1 className='text-bold uppercase text-xl'>Company visited</h1>
                    </div>
                    <div className=' text-white flex flex-col  rounded-xl p-2  justify-center items-center '>
                        <h1 className=' text-semibold text-5xl'>900+</h1>
                        <h1 className='text-bold uppercase text-xl'>placement</h1>
                    </div>
                    
                </div>



            </div>
        </div>
    </div>
  )
}

export default Bgtest