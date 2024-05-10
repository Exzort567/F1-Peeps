import xmlJs from 'xml-js';

const fetchRaceResults = async () => {
    try {
        const response = await fetch('http://ergast.com/api/f1/current/last/results');
        if (!response.ok) {
            throw new Error('Failed to fetch race results');
        }
        const xmlData = await response.text();
        const jsonData = xmlJs.xml2json(xmlData, { compact: true, spaces: 4 });
        const data = JSON.parse(jsonData);
        
        if (
            data &&
            data.MRData &&
            data.MRData.RaceTable &&
            data.MRData.RaceTable.Race &&
            data.MRData.RaceTable.Race.ResultsList &&
            data.MRData.RaceTable.Race.ResultsList.Result
        ) {
            return data.MRData.RaceTable.Race.ResultsList.Result;
        } else {
            throw new Error('Race results data not available');
        }
    } catch (error) {
        console.error('Error fetching race results:', error);
        return [];
    }
};

export { fetchRaceResults };
