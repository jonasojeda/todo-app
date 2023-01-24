import React from 'react'
import { useState } from 'react';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setcurrentTime] = useState(time)

    let dates = new Date().toDateString();
    const [currenteDate, setCurrenteDate] = useState(dates)

    const updateDates = () => {
        let dates = new Date().toDateString();
        setCurrenteDate(dates)
    }

    const updateTime = () =>{
        let time = new Date().toLocaleTimeString();
        setcurrentTime(time)
    }

    setInterval(updateTime, 1000)
    setInterval(updateDates, 1000)
  return (
    <div className='mt-3 text-sm text-[#8ea6c8] flex justify-between items-center mb-7 mr-7 ml-7 max-sm:flex-col max-sm:justify-start '>
        <p className='text-4xl'>{dates}</p>
        <br className='hidden' />
        <p className='text-3xl'>{time}</p>
        
    </div>
  )
}

export default Clock