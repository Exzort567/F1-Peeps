import React, { useState, useEffect } from 'react';
import xml2js from 'xml-js';

const DriverStanding = () => {
  const [driverStandings, setDriverStandings] = useState([]);

  useEffect(() => {
    const fetchDriverStandings = async () => {
      try {
        const response = await fetch('http://ergast.com/api/f1/current/driverStandings');
        const xmlData = await response.text();
        const jsonData = xml2js.xml2json(xmlData, { compact: true, spaces: 4 });
        const data = JSON.parse(jsonData);
        setDriverStandings(data.MRData.StandingsTable.StandingsList.DriverStanding);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDriverStandings();
  }, []);

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
