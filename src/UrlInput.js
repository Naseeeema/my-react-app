// UrlInput.js
import React, { useState } from 'react';

const UrlInput = ({ onScan }) => {
    const [url, setUrl] = useState('');

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const handleScanClick = () => {
        if (url.trim() !== '') {
            // Pass the URL to the parent component (App.js) for scanning
            onScan(url);
        } else {
            alert('Please enter a URL to scan.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={handleUrlChange}
            />
            <button onClick={handleScanClick}>Scan</button>
        </div>
    );
}

export default UrlInput;
