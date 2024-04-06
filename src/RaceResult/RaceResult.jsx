import React, { useEffect, useState } from 'react';
import { fetchRaceResults } from '../service.js/ergastRaceResult';

const RaceResultsPage = () => {
    const [raceResults, setRaceResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const result = await fetchRaceResults();
                setRaceResults(result.raceResults);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {raceResults && raceResults.length > 0 && (
                <div>
                    <h2>Race Results</h2>
                    {raceResults.map((result, index) => (
                        <div key={index}>
                            <p>Driver: {result.Driver?.GivenName?._text} {result.Driver?.FamilyName?._text}</p>
                            <p>Position: {result._attributes.position}</p>
                            <p>Points: {result._attributes.points}</p>
                            <p>Time: {result.Time?._text}</p>
                            {/* Add more details as needed */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RaceResultsPage;
