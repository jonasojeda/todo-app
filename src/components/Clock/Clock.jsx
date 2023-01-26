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
    <div className='max-sm:h-1/5 h-32 gardient text-sm text-[#ffffff] flex justify-between items-center mb-7 max-sm:flex-col max-sm:justify-start w-full mt-0 rounded-t-2xl max-lg:rounded-none'>
        <p className='max-sm:text-4xl text-5xl ml-3'>{dates}</p>
        <br className='hidden' />
        <p className='max-sm:text-3xl mr-3 text-4xl'>{time}</p>
        
    </div>
  )
}

export default Clock