import xmlJs from 'xml-js';

const fetchDriverStandings = async () => {
    try {
        const response = await fetch('http://ergast.com/api/f1/current/driverStandings');
        if (!response.ok) {
            throw new Error('Failed to fetch driver standings');
        }
        const xmlData = await response.text();
        const jsonData = xmlJs.xml2json(xmlData, { compact: true, spaces: 4 });
        const data = JSON.parse(jsonData);

        // Ensure nested properties exist before accessing them
        if (
            data &&
            data.MRData &&
            data.MRData.StandingsTable &&
            data.MRData.StandingsTable.StandingsList &&
            data.MRData.StandingsTable.StandingsList.DriverStanding
        ) {
            return data.MRData.StandingsTable.StandingsList.DriverStanding;
        } else {
            throw new Error('Driver standings data not available');
        }
    } catch (error) {
        console.error('Error fetching driver standings:', error);
        return [];
    }
};

export { fetchDriverStandings };
