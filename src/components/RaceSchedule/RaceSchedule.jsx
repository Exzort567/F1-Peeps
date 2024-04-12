import React from 'react';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);
function RaceSchedule({ raceDetails }) {
    console.log('Race Details:', raceDetails); // Log the raceDetails object
    
    const { Time, RaceName, Circuit, Date } = raceDetails;
    
    return (
        <div className='raceSchedule_container'>
            <div>
                <h2>Race Details</h2>
                <p>Date: {Date && Date._text}, {Time && Time._text}</p>
                {Circuit && <p>Track: {Circuit.CircuitName && Circuit.CircuitName._text}</p>}
                
            </div>
            <ColoredLine color="black" />
        </div>
    );
} 

export default RaceSchedule;
