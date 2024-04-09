import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import GrandPrix from '../components/GrandPrix/GrandPrix';
import RaceSchedule from '../components/RaceSchedule/RaceSchedule';
import RaceResult from '../RaceResult/RaceResult'; // Import the RaceResult component

function HomePage() {
    const [selectedRace, setSelectedRace] = useState(1);

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
        </>
    );
}

export default HomePage;
