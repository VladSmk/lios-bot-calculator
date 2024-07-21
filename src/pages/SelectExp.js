import { useState } from "react";
import Explosive from "../components/Explosive";
import './SelectExp.css';

export default function SelectExp({ onConfirm }) {
    const [exps, setExps] = useState(["Simple Oil Drum Bomb", "Handmade Charge", "Military C4 Explosive", "Simple Rocket Shell", "Rocket Shell", "Grenade", "Fusion Alloy Grenade", "Cyclonite"]);
    const [expImages, setExpImages] = useState(["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg", "p7.jpg", "p8.jpg"]);
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
                {exps.map((exp, index) => (
                    <Explosive
                        key={index}
                        name={exp}
                        pathToImage={expImages[index]}
                        onClick={() => handleClick(exp)}
                        selected={selectedItems.includes(exp)}
                    />
                ))}
            </div>
            <div className="navigate-button-container" style={{zIndex: 2}}>
                <div className="navigate-button-background">
                    <button className="navigate-button" onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
}
