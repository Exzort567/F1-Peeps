import xmlJs from 'xml-js';

const fetchRaceResults = async () => {
    try {
        const response = await fetch("http://ergast.com/api/f1/current/last/results");
        if (!response.ok) {
            throw new Error('Failed to fetch race results');
        }
        const xmlData = await response.text();
        const jsonData = xmlJs.xml2json(xmlData, { compact: true });
        const data = JSON.parse(jsonData);

        console.log(data); // Log data here

        if (
            data &&
            data.MRData &&
            data.MRData.RaceTable &&
            data.MRData.RaceTable.Race &&
            data.MRData.RaceTable.Race &&
            data.MRData.RaceTable.Race.ResultsList &&
            data.MRData.RaceTable.Race.ResultsList.Result // Check if Result exists
        ) {
            let raceResults = data.MRData.RaceTable.Race.ResultsList.Result;
            if (!Array.isArray(raceResults)) {
                raceResults = [raceResults]; // Ensure raceResults is an array
            }

            return { raceResults };
        } else {
            throw new Error('Race results data not available');
        }
    } catch (error) {
        console.error('Error fetching race results: ', error);
        return { raceResults: [] };
    }
};

export { fetchRaceResults };
