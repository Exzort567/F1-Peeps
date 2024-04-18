// ergastRaceResult.js
import xmlJs from 'xml-js';
import { raceresult } from './apis'; // Import the raceresult array from apis.js

const fetchRaceResults = async (raceId) => {
    console.log(raceId);
    try {
        const race = raceresult.find(item => item.id === raceId);
        console.log(raceId);
        if (!race) {
            throw new Error('Race not found');
        }
        console.log(race);
        const response = await fetch(race.url);
        console.log(race)
        if (!response.ok) {
            throw new Error('Failed to fetch race results');
        }
        console.log(response);

        const xmlData = await response.text();
        const jsonData = xmlJs.xml2json(xmlData, { compact: true, spaces: 4 });
        const data = JSON.parse(jsonData);
        console.log(data);

        const results = data?.MRData?.RaceTable?.Race?.ResultsList?.Result;
        if (results && !Array.isArray(results)) {
            return { raceResults: [results] };
        } else if (Array.isArray(results)) {
            return { raceResults: results };
        } else {
            throw new Error('Race results data not available');
        }
    } catch (error) {
        console.error('Error fetching race results:', error);
        throw error;
    }
};

export { fetchRaceResults };
