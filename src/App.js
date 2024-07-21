import React, { useState } from 'react';
import SelectExp from "./pages/SelectExp";
import ResultPage from "./pages/ResultPage";
import NeedToBlowUp from "./pages/NeedToBlowUp";
import AuditPage from "./pages/AuditPage";
import './App.css';

function App() {
    const [page, setPage] = useState(1);

    const handleClick = () => {
        setPage(page % 4 + 1);
    };

    return (
        <div className="app-container">
            {page === 1 ? (
                <SelectExp />
            ) : page === 2 ? (
                <NeedToBlowUp />
            ) : page === 3 ? (
                <ResultPage />
            ) : (
                <AuditPage />
            )}
            <button className="navigate-button" onClick={handleClick}>Next Page</button>
        </div>
    );
}

export default App;
