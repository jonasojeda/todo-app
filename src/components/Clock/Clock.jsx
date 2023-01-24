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
    <div>
        <h1>{dates}</h1>
        <h3>{time}</h3>
        
    </div>
  )
}

export default Clock