import React from 'react'
import RaceSchedule from '../components/RaceSchedule/RaceSchedule'
import DriverStanding from '../components/Standtings/DriverStading'
import ConstructorStanding from '../components/Standtings/ConstructorStanding'
import Navbar from '../components/Navbar/Navbar'
import GrandPrix from '../components/GrandPrix/GrandPrix'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <GrandPrix/>
      <RaceSchedule/>
    </>
    
    
  )
}

export default HomePage