import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import GrandPrix from '../components/GrandPrix/GrandPrix';
import RaceSchedule from '../components/RaceSchedule/RaceSchedule';
import RaceResult from '../RaceResult/RaceResult'; 
import { fetchRaceResults } from '../service.js/ergastRaceResult';
import ConstructorStanding from '../components/Standtings/ConstructorStanding';
import DriverStanding from '../components/Standtings/DriverStading';
import './homepage.css'

function HomePage() {
    const [selectedRace, setSelectedRace] = useState(null);
    const [selectedRaceResult, setSelectedRaceResult] = useState(null);

    

    const handleRaceClick = async (race) => {
        setSelectedRace(race);
        try {
            const result = await fetchRaceResults(race.id);
            setSelectedRaceResult(result);
        } catch (error) {
            console.error('Error fetching race results:', error);
            // Handle error as needed
        }
    };
    
    return (
        <>
            <Navbar />
            <GrandPrix onRaceClick={handleRaceClick} />
            
            {selectedRace && (
                <>  
                    <RaceSchedule raceDetails={selectedRace} />
                    
                   
                </>
            )}
            {!selectedRace && <p>No race selected</p>}
            <div className='standings'>
                <DriverStanding/>
                <RaceResult/>
                <ConstructorStanding/>
            </div>
            
            
            
        </>
      
    );
}

export default HomePage;
