import React, { useState } from 'react';
import SelectExp from "./pages/SelectExp";
import ResultPage from "./pages/ResultPage";
import NeedToBlowUp from "./pages/NeedToBlowUp";
import AuditPage from "./pages/AuditPage";

function App() {
    const [page, setPage] = useState(1);

    const handleClick = () => {
        setPage(page%4+1);
    };

    return (
        <>
            {page===1 ? (
                <SelectExp />
            ) : page===2 ? (
                <NeedToBlowUp />
            ) : page===3 ? (
                <ResultPage />
            ) : (
                <AuditPage />
            )}

            <button onClick={handleClick} >Button</button>
        </>
    );
}

export default App;
