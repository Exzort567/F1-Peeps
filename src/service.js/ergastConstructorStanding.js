import xmlJs from 'xml-js';

const fetchConstructorStandings = async () => {
    try {
        const response = await fetch('https://ergast.com/api/f1/current/constructorStandings');
        if (!response.ok) {
            throw new Error('Failed to fetch Constructor Standings');
        }
        const xmlData = await response.text();
        const jsonData = xmlJs.xml2json(xmlData, { compact: true });
        const data = JSON.parse(jsonData);

        if (
            data &&
            data.MRData &&
            data.MRData.StandingsTable &&
            data.MRData.StandingsTable.StandingsList &&
            data.MRData.StandingsTable.StandingsList.ConstructorStanding
        ) {
            return data.MRData.StandingsTable.StandingsList.ConstructorStanding;
        } else {
            throw new Error('Constructor standings data not available');
        }
    } catch (error) {
        console.error('Error fetching constructor standings:', error);
        return [];
    }
};

export { fetchConstructorStandings };
