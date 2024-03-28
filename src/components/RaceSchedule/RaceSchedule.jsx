import React from 'react';

function RaceSchedule({ raceDetails }) {
    return (
        <div className='raceSchedule_container'>
            <div>
                <h2>Race Details</h2>
                <p>Date: {raceDetails.Date}</p>
                {raceDetails.Circuit && (
                    <p>Track: {raceDetails.Circuit.CircuitName}</p>
                )}
            </div>
        </div>
    );
}

export default RaceSchedule;
