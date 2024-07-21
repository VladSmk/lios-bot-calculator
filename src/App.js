import React, { useState } from 'react';
import SelectExp from "./pages/SelectExp";
import NeedToBlowUp from "./pages/NeedToBlowUp";
import ResultPage from "./pages/ResultPage";
import AuditPage from "./pages/AuditPage";
import './App.css';

function App() {
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedExplosives, setSelectedExplosives] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const previousPage = () => {
        setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber);
    };

    const nextPage = () => {
        setPageNumber(pageNumber < 4 ? pageNumber + 1 : pageNumber);
    };

    const newTry = () => {
        setPageNumber(1);
        setSelectedExplosives([]);
        setSelectedItems([]);
    };

    const handleConfirmExplosives = (items) => {
        setSelectedExplosives(items);
        nextPage();
    };

    const handleConfirmItems = (items) => {
        setSelectedItems(items);
        nextPage();
    };

    return (
        <div className="app-container">
            {pageNumber === 1 ? (
                <SelectExp onConfirm={handleConfirmExplosives} />
            ) : pageNumber === 2 ? (
                <NeedToBlowUp onConfirm={handleConfirmItems} onBack={previousPage} />
            ) : pageNumber === 3 ? (
                <ResultPage selectedExplosives={selectedExplosives} selectedItems={selectedItems} />
            ) : (
                <AuditPage selectedExplosives={selectedExplosives} selectedItems={selectedItems} />
            )}
            {pageNumber === 3 && (
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
