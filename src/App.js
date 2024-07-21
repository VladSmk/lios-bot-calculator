import React, { useState } from 'react';
import SelectExp from "./pages/SelectExp";
import ResultPage from "./pages/ResultPage";
import NeedToBlowUp from "./pages/NeedToBlowUp";
import AuditPage from "./pages/AuditPage";
import './App.css';

function App() {
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);

    const previousPage = () => {
        setPageNumber(pageNumber>1 ? pageNumber - 1 : pageNumber);
    };
    const nextPage = () => {
        setPageNumber(pageNumber<4 ? pageNumber + 1 : pageNumber);
    };
    const newTry = () => {
        setPageNumber(1);
    };

    const handleConfirm = (items) => {
        setSelectedItems(items);
        console.log('Selected items:', items);
        setPageNumber(pageNumber % 4 + 1);
    };

    return (
        <div className="app-container">
            {pageNumber === 1 ? (
                <SelectExp onConfirm={handleConfirm} />
            ) : pageNumber === 2 ? (
                <NeedToBlowUp />
            ) : pageNumber === 3 ? (
                <ResultPage />
            ) : (
                <AuditPage />
            )}
            {(pageNumber === 2 || pageNumber === 3) && (
                <div className="navigate-button-container">
                    <div className="navigate-button-background">
                        <button className="navigate-button" onClick={previousPage}>Back</button>
                        <button className="navigate-button" onClick={nextPage}>Next</button>
                    </div>
                </div>
            )}
            {pageNumber === 4 && (
                <div className="navigate-button-container">
                    <div className="navigate-button-background">
                        <button className="navigate-button" style={{width: '130px'}} onClick={newTry}>Try again</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default App;
