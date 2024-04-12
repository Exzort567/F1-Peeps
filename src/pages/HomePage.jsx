import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import GrandPrix from '../components/GrandPrix/GrandPrix';
import RaceSchedule from '../components/RaceSchedule/RaceSchedule';
import RaceResult from '../RaceResult/RaceResult'; 

function HomePage() {
    const [selectedRace, setSelectedRace] = useState({
        round: 1 // Set a default round value
    });

    const handleRaceClick = (race) => {
        setSelectedRace(race);
    };

    return (
        <>
            <Navbar />
            <GrandPrix onRaceClick={handleRaceClick} />
            {selectedRace && (
                <>  
                    
                    <RaceSchedule raceDetails={selectedRace} />
                    <RaceResult selectedRace={selectedRace} />
                    
                </>
            )}
            {!selectedRace && <p>No race selected</p>}
        </>
    );
}

export default HomePage;
