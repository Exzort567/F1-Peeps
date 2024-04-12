import xmlJs from 'xml-js';

const fetchRaceResults = async (round) => {
    try {
        const response = await fetch(`http://ergast.com/api/f1/current/${round}/results`);
        if (!response.ok) {
            throw new Error('Failed to fetch race results');
        }
        
        const xmlData = await response.text();
        const jsonData = xmlJs.xml2json(xmlData, { compact: true, spaces: 4 });
        const data = JSON.parse(jsonData);

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

export default fetchRaceResults;
