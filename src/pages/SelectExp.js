import { useState } from "react";
import Explosive from "../components/Explosive";
import './SelectExp.css';
import { explosives, explosiveImages } from "../data/explosivesData";

export default function SelectExp({ onConfirm }) {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleClick = (exp) => {
        setSelectedItems(prevSelectedItems =>
            prevSelectedItems.includes(exp)
                ? prevSelectedItems.filter(item => item !== exp)
                : [...prevSelectedItems, exp]
        );
    };

    const handleConfirm = () => {
        onConfirm(selectedItems);
    };

    return (
        <div className="select-exp-container">
            <h2>Choose explosive you have</h2>
            <div className="explosives-grid">
                {explosives.map((exp, index) => (
                    <Explosive
                        key={index}
                        name={exp}
                        pathToImage={explosiveImages[index]}
                        onClick={() => handleClick(exp)}
                        selected={selectedItems.includes(exp)}
                    />
                ))}
            </div>
            <div className="navigate-button-container" style={{zIndex: 2}}>
                <div className="navigate-button-background">
                    <button className="navigate-button" onClick={handleConfirm}>Next</button>
                </div>
            </div>
        </div>
    );
}
