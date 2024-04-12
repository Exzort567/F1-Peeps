import React, { useState, useEffect, useRef } from 'react';
import { fetchRaceSchedule } from '../../service.js/ergastAPI';
import '../GrandPrix/GrandPrix.css';

function GrandPrix({ onRaceClick }) {
    const [races, setRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const raceListRef = useRef(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const allRacesData = [];
                for (let round = 1; round <= 23; round++) {
                    const raceData = await fetchRaceSchedule(round);
                    allRacesData.push(...raceData);
                }
                setRaces(allRacesData);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='container grandprix_container'>
            <div className='item'>
                <div 
                    className="race-list-wrapper" 
                    ref={raceListRef}
                >   
                    {races.map((race, index) => (
                        <span key={index} onClick={() => onRaceClick(race)}> {/* Pass race.round to the onRaceClick handler */}
                            {race.RaceName} 
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GrandPrix;
