    import xmlJs from "xml-js";

    const fetchRaceSchedule = async () => {
        try {
            const response = await fetch ('http://ergast.com/api/f1/current');
            if  (!response.ok) {
                throw new Error('Failed to fetch race schedule');
            }
            const xmlData = await response.text();
            const jsonData = xmlJs.xml2json(xmlData, { compact: true, space: 4});
            const data = JSON.parse(jsonData);
            console.log(data)

            if (
                data &&
                data.MRData &&
                data.MRData.RaceTable &&
                data.MRData.RaceTable.Race
            ) {
                return data.MRData.RaceTable.Race 
                
            } else {
                throw new Error('Race schedule data not available ')
            }

            
        } catch (error) {
            console.error('Error fetching race schedule: ', error);
            return [];
        }
    };

    export { fetchRaceSchedule };