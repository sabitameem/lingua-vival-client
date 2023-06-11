import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import SingleTopIns from './SingleTopIns';

const TopInstructors = () => {
    const [instructors,setInstructors]=useState([])

    useEffect(()=>{
        fetch('https://lingua-viva-server.vercel.app/instructors')
        .then(res=> res.json())
        .then(data=>{
            const sortedIns = data.sort((a, b) => b.available_seats - a.available_seats);
            setInstructors(sortedIns.slice(0, 6))
        })
    },[])



    return (
        <div className='lg:mt-4 mb-6 px-10 py-6'>
            {/* text start */}
            <div className="divider divide-slate-950"></div>
            <div className="flex justify-center mb-7">
            <Fade><h4 className="lg:text-6xl text-3xl text-center font-semibold text-color-three "> Our <span className='text-color-one'>Best</span> Instructors{" "}
          
          </h4></Fade>
             <img className="lg:w-[90px] ml-2 lg:ml-7" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-teacher-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png" alt="external-teacher-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1"/>
            </div>
            {/* text end */}
            {/* data fetch start */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-10">
           {
                instructors.map(singleTopIns =><SingleTopIns key={singleTopIns._id} singleTopIns={singleTopIns}></SingleTopIns>)
            }
           </div>
         
            
        </div>
    );
};

export default TopInstructors;