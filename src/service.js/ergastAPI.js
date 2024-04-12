import xmlJs from 'xml-js';



const fetchRaceSchedule = async (round) => {
    try {
        const response = await fetch(`https://ergast.com/api/f1/2024/${round}`);
        if (!response.ok) {
            throw new Error('Failed to fetch race');
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
        ) { 
            let races = data.MRData.RaceTable.Race;
            if (!Array.isArray(races)) {
                races = [races]; // Wrap in array if only one race is returned
            }
            return races.map(race => ({
                RaceName: race.RaceName._text,
                Circuit: race.Circuit,
                Date: race.Date,
                Time: race.Time,
                FirstPractice: race.FirstPractice ? race.FirstPractice._text : '',
                SecondPractice: race.SecondPractice ? race.SecondPractice._text : '',
                ThirdPractice: race.ThirdPractice ? race.ThirdPractice._text : '',
                Qualifying: race.Qualifying ? race.Qualifying._text : '',
            }));
        } else {
            throw new Error('Race data not available');
        }
    } catch (error) {
        console.error('Error fetching race schedule:', error);
        return [];
    }
    
};




export { fetchRaceSchedule };