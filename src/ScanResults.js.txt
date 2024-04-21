// ScanResults.js
import React from 'react';

const ScanResults = ({ results }) => {
    return (
        <div>
            <h2>Scan Results</h2>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
}

export default ScanResults;
