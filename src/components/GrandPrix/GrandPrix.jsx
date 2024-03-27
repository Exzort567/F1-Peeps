import React, { useState, useEffect } from 'react';
import { fetchRaceSchedule } from '../../service.js/ergastAPI';
import '../GrandPrix/GrandPrix.css';

function GrandPrix() {
    const [races, setRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                // Array to hold all race data
                const allRacesData = [];
                // Loop through all rounds (1 to 23)
                for (let round = 1; round <= 23; round++) {
                    // Fetch race data for each round
                    const raceData = await fetchRaceSchedule(round);
                    // Push the fetched data into the array
                    allRacesData.push(...raceData);
                }
                // Set the state with all race data
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
        <div className='container'>
            <ul>
                <li>
                    
                    {races.map((race, index) => (
                        <span key={index}>{race.RaceName._text}   </span>
                    ))}
                </li>
            </ul>
        </div>
    );
}

export default GrandPrix;
