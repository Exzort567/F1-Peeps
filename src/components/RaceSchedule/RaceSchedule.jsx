import React, { useState, useEffect } from 'react';
import { fetchRaceSchedule } from '../../service.js/eargastRaceSchedule';

function RaceSchedule() {
    const [races, setRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const raceData = await fetchRaceSchedule();
                setRaces(raceData);
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
        <div>
          <h2>Race Schedule</h2>
          <ul>
            {races.length > 0 ? (
              races.map((race, index) => (
                <li key={index}>
                  <h3>{race.RaceName?._text}</h3>
                  <p>Date: {race.Date?._text}</p>
                  <p>Location: {race.Circuit?.Location?.locality?._text}, {race.Circuit?.Location?.country?._text}</p>
                  <p>Circuit: {race.Circuit?.CircuitName?._text}</p>
                </li>
              ))
            ) : (
              <li>No races scheduled</li>
            )}
          </ul>
        </div>
    );
}

export default RaceSchedule;
