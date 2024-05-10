import React, { useEffect, useState } from 'react';
import { fetchRaceResults } from '../service.js/ergastRaceResult'; 

const RaceResult = () => {
    const [raceResults, setRaceResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const raceResults = await fetchRaceResults();
                setRaceResults(raceResults);
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
        <div className='container_driver'>
            <h1>Race Result</h1>
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Driver</th>
                        <th>Constructor</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                {raceResults.map((race, index) => (
                    <tr key={index}>
                        <td>{race._attributes.position}</td>
                        <td>{race.Driver.GivenName._text} {race.Driver.FamilyName._text}</td>
                        <td>{race.Constructor.Name._text}</td>
                        <td>{race._attributes.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default RaceResult;
