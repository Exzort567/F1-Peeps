import React, { useEffect, useState } from 'react';
import { fetchRaceResults } from '../service.js/ergastRaceResult';




const RaceResult = ({ selectedRace }) => {
    const [raceResults, setRaceResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!selectedRace || !selectedRace.round) return; // Check if selectedRace is defined and has a round property
            try {
                setIsLoading(true);
                const result = await fetchRaceResults(selectedRace.round);
                setRaceResults(result.raceResults);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [selectedRace]);

    return (
        <div className="container">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {raceResults && raceResults.length > 0 && (
                <div className="overflow-x-auto">
                    <h2>Results</h2>
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pos</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Driver</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Time</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pts</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {raceResults.map((result, index) => (
                                <tr key={index}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{result._attributes.position}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{result.Driver?.GivenName?._text} {result.Driver?.FamilyName?._text}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{result.Time?._text}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{result._attributes.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RaceResult;
