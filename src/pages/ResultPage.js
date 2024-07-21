import React from 'react';

export default function ResultPage({ selectedExplosives, selectedItems }) {
    return (
        <>
            <h2>ResultPage</h2>
            <div>
                <h3>Selected Explosives</h3>
                <ul>
                    {selectedExplosives.map((exp, index) => (
                        <li key={index}>{exp}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Selected Items</h3>
                <ul>
                    {selectedItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
