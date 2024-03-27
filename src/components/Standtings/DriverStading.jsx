import React, { useState, useEffect } from 'react';
import { fetchDriverStandings } from '../../service.js/ergastDriverStandingAPI';

const DriverStanding = () => {
    const [driverStandings, setDriverStandings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          try {
              setIsLoading(true);
              const driverStandingsData = await fetchDriverStandings();
              
              setDriverStandings(driverStandingsData);
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
            <h1>Current Driver Standings</h1>
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Driver</th>
                        <th>Points</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {driverStandings.map((driver, index) => (
                        <tr key={index}>
                            <td>{driver._attributes.position}</td>
                            <td>
                                {driver.Driver.GivenName._text} {driver.Driver.FamilyName._text}
                            </td>
                            <td>{driver._attributes.points}</td>
                            <td>{driver._attributes.wins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DriverStanding;
