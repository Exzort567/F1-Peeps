import React from 'react';
import '../RaceResult/RaceResult.css';

const RaceResults = () => (
    <div className="section">
        <h2>Result</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Driver</th>
                    <th>Time</th>
                    <th>Pts</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Lewis Hamilton</td>
                    <td>1:30:15</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Max Verstappen</td>
                    <td>1:30:30</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Valtteri Bottas</td>
                    <td>1:30:45</td>
                    <td>15</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const ConstructorStandings = () => (
    <div className="section">
        <h2>2024 Constructor Standing</h2>
        <table className="table2">
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Team</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mercedes</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Red Bull Racing</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Ferrari</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const DriverStandings = () => (
    <div className="section">
        <h2>2024 Driver Standing</h2>
        <table className="table3">
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Driver</th>
                    <th>Pts</th>
                    <th>Wins</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Lewis Hamilton</td>
                    <td>25</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Max Verstappen</td>
                    <td>18</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Valtteri Bottas</td>
                    <td>15</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const RaceResultsPage = () => (
    <div className="container">
        <RaceResults />
        <ConstructorStandings />
        <DriverStandings />
    </div>
);

export default RaceResultsPage;
