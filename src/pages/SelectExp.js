import { useState } from "react";
import Explosive from "../components/Explosive";
import './SelectExp.css';

export default function SelectExp() {
    const [exps, setExps] = useState(["Simple Oil Drum Bomb", "Handmade Charge", "Military C4 Explosive", "Simple Rocket Shell", "Rocket Shell", "Grenade", "Fusion Alloy Grenade", "Cyclonite"]);
    const [expImages, setExpImages] = useState(["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg", "p7.jpg", "p8.jpg"]);

    return (
        <div className="select-exp-container">
            <h2>Select Explosion</h2>
            <div className="explosives-grid">
                {exps.map((exp, index) => (
                    <Explosive key={index} name={exp} pathToImage={expImages[index]} />
                ))}
            </div>
        </div>
    );
}