import React, { useState, useEffect } from 'react';
import  xmlJs  from 'xml-js'


function RaceSchedule() {
    const [races, setRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        const fetchRaces = async () => {
            try {
                setIsLoading(true);
                const respone = await fetch (
                    'http://ergast.com/api/f1/current'
                );
    
                if(!respone.ok) {
                    throw new Error('Failed to fetch race schedule');
                }
                const xmlText = await respone.text();
                const jsonData = xmlJs.xml2js(xmlText, {compact: true});
    
                if (
                    jsonData.MRData &&
                    jsonData.MRData.RaceTable &&
                    jsonData.MRData.RaceTable.Race &&
                    Array.isArray(jsonData.MRData.RaceTable.Race)
    
                ){
                    setRaces(jsonData.MRData.RaceTable.Race);
                } else if (jsonData.MRData.RaceTable.Race) {
                    setRaces([jsonData.MRData.RaceTable.Race]);
                } else {
                    setRaces([]);
                }
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
            
        };

        fetchRaces();
        
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: </div>
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