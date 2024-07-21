import React from 'react';

export default function AuditPage({ selectedExplosives, selectedItems }) {
    return (
        <>
            <h2>AuditPage</h2>
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
                        <>
                            <li key={index}>{item}</li>
                            hallo
                        </>
                    ))}
                </ul>
            </div>
        </>
    );
}
