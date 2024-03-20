import React from 'react'

import main from "@/assets/uploads/2024/03/main.jpeg"
import principleImg from "@/assets/principle.jpeg"

const PrincipleMsg = () => {
  return (
    
    <div className='bg-white m-5 px-20 py-10 items-center  shadow-xl rounded-xl grid grid-cols-7'>
        <div className=' col-span-2  '>
            <img src={principleImg} className=' bg-blue-50 shadow-xl p-5  rounded-tl-[100px] rounded-br-[100px]' alt="" />
        </div > 
        <div className='bg-blue-50 col-span-5 flex flex-col gap-2 pl-5 rounded-xl py-3 shadow-xl'>
            
           <div className='text-4xl uppercase font-bold'><span className='text-blue-700'>Principle</span>  Message</div>
           <div className='font-semibold'>Civil Department</div>
            <div className='font-bold text-xl'>Dr.  Sanjeev Naval</div>
            <div>It is a privilege to lead Dr B R Ambedkar National Institute of Technology (NIT) Jalandhar, one of the national accolades and an outstanding institution of higher learning. NIT Jalandhar is ranked 46th in the National Institutional Ranking Framework (NIRF-2023), Band-Excellent in the Atal Ranking of Institutions on Innovation Achievements (ARIIA), and was recently ranked in the 401-500 range in the Times Higher Education (THE) Emerging Economies University Rankings 2022. These accomplishments are the result of responsive leadership, dedication of the faculty and staff, and considerable efforts by students.
            </div>
            <div className='text-blue-600'>Read All →</div>
            
            
        </div>

        
    </div>
  )
}

export default PrincipleMsg