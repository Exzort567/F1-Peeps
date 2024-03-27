// ergastAPI.jsx
import xmlJs from 'xml-js';

const fetchRaceSchedule = async (round) => {
    try {
        const response = await fetch(`https://ergast.com/api/f1/2024/${round}`);
        if (!response.ok) {
            throw new Error('Failed to fetch race schedule');
        }
        const xmlData = await response.text();
        const jsonData = xmlJs.xml2json(xmlData, { compact: true, spaces: 4 });
        const data = JSON.parse(jsonData);
        console.log(data); // Log the data to check if it's correct
        if (
            data &&
            data.MRData &&
            data.MRData.RaceTable &&
            data.MRData.RaceTable.Race
        )  {
            const race = data.MRData.RaceTable.Race;
            return [race]; // Wrap race in an array for consistency
        } else {
            throw new Error('Race data not available');
        }
    } catch (error) {
        console.error('Error fetching race schedule:', error);
        return [];
    }
};

export { fetchRaceSchedule };
