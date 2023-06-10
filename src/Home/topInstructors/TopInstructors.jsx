import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TopInstructors = () => {
    const [instructors,setInstructors]=useState([])

    // useEffect(()=>{
    //     fetch('https://lingua-viva-server.vercel.app/instructors')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         console.log(data)
    //     })
    // },[])



    return (
        <div>
            <h3>Top instructors</h3>
            
        </div>
    );
};

export default TopInstructors;