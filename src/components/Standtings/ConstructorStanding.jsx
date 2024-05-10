import React, { useState, useEffect } from 'react';
import { fetchConstructorStandings } from '../../service.js/ergastConstructorStanding';
import './driverStanding.css'

const ConstructorStanding = () => {
    const [constructorStandings, setConstructorStandings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const constructorStandingsData = await fetchConstructorStandings();
                
                setConstructorStandings(constructorStandingsData);
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
            <h1>Current Constructor Standings</h1>
            <table>
                <thead>
                    <th>Position</th>
                    <th>Constructor</th>
                    <th>Points</th>
                    <th>Wins</th>
                </thead>
                <tbody>
                    {constructorStandings.map((constructor, index) => (
                        <tr key={index}>
                            <td>{constructor._attributes.position}</td>
                            <td>{constructor.Constructor.Name._text}</td>
                            <td>{constructor._attributes.points}</td>
                            <td>{constructor._attributes.wins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ConstructorStanding;
