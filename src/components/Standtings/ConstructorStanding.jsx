import React, { useState, useEffect } from 'react';
import { fetchConstructorStandings } from '../../service.js/ergastConstructorStanding';

const ConstructorStanding = () => {
    const [constructorStandings, setConstructorStandings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const constructorStandingsData = await fetchConstructorStandings();
                console.log(constructorStandingsData);
                setConstructorStandings(constructorStandingsData);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            ConstructorStanding
        </div>
    );
};

export default ConstructorStanding;
