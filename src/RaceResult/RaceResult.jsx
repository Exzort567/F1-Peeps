// RaceResult.jsx
import React, { useEffect, useState } from 'react';
import { fetchRaceResults } from '../service.js/ergastRaceResult'; // Import the fetchRaceResults function from apis.js

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

function RaceResult({ raceDetails }) {
    const [raceResults, setRaceResults] = useState([]);
    const { id } = raceDetails;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchRaceResults(id);
                setRaceResults(result.raceResults);
            } catch (error) {
                console.error('Error fetching race results:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className='raceSchedule_container'>
            <div>
                <h2>Race Results</h2>
                <ul>
                    {raceResults.map((result, index) => (
                        <li key={index}>
                            <strong>Position:</strong> {result.position._text}<br />
                            <strong>Driver:</strong> {result.Driver ? result.Driver.familyName._text : 'Unknown'}<br />
                            <strong>Constructor:</strong> {result.Constructor ? result.Constructor.name._text : 'Unknown'}<br />
                        </li>
                    ))}
                </ul>
            </div>
            <ColoredLine color="black" />
        </div>
    );
}

export default RaceResult;
