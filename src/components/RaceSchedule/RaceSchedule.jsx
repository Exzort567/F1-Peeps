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
    const { Time, RaceName, Circuit, Date } = raceDetails;
    
    return (
        <div className='raceSchedule_container'>
            <div>
                <h2>Race Details</h2>
                <p>Date: {Date._text}, {Time._text}</p>
                {Circuit && <p>Track: {Circuit.CircuitName._text}</p>}
                
            </div>
            <ColoredLine color="black" />
        </div>
        
    );
} 

export default RaceSchedule;
