import xmlJs from 'xml-js';

const fetchRaceSchedule = async () => {
    try {
        const response = await fetch('http://ergast.com/api/f1/current');
        if (!response.ok) {
            throw new Error('Failed to fetch race schedule');
        }
        const xmlData = await response.text();
        const jsonData = xmlJs.xml2json(xmlData, { compact: true, spaces: 4 });
        const data = JSON.parse(jsonData);
        return data.MRData.RaceTable.Race;
    } catch (error) {
        console.error('Error fetching race schedule:', error);
        return [];
    }
};

export { fetchRaceSchedule };
