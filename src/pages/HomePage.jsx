import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import GrandPrix from '../components/GrandPrix/GrandPrix';
import RaceSchedule from '../components/RaceSchedule/RaceSchedule';

function HomePage() {
    const [selectedRace, setSelectedRace] = useState(null);

    const handleRaceClick = (race) => {
        setSelectedRace(race);
    };

    return (
        <>
            <Navbar />
            <GrandPrix onRaceClick={handleRaceClick} />
            {selectedRace && <RaceSchedule raceDetails={selectedRace} />}
        </>
    );
}

export default HomePage;
