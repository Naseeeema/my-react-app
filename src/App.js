// App.js
import React from 'react';
import Header from './Header';
import UrlInput from './UrlInput';
import ScanButton from './ScanButton';
import ScanResults from './ScanResults';

const App = () => {
    return (
        <div>
            <Header />
            <UrlInput />
            <ScanButton />
            <ScanResults />
        </div>
    );
}

export default App;

