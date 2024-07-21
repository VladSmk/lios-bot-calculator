import React from 'react';
import './Explosive.css';

const Explosive = ({ name, pathToImage }) => {
    return (
        <div className="explosive-item">
            <img src={process.env.PUBLIC_URL + "/img/exp/" + pathToImage} alt={name} />
            <div className="explosive-name">{name}</div>
        </div>
    );
};

export default Explosive;
