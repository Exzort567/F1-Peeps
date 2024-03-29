import React from 'react';

function RaceSchedule({ raceDetails }) {
    const { Time, RaceName, Circuit, Date } = raceDetails;
    
    return (
        <div className='raceSchedule_container'>
            <div>
                <h2>Race Details</h2>
                <p>Date: {Date._text}, {Time._text}</p>
                {Circuit && <p>Track: {Circuit.CircuitName._text}</p>}
                
            </div>
        </div>
    );
}

export default RaceSchedule;
