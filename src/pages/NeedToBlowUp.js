import React, { useState } from 'react';
import { wood, stone, iron, steel, titanium, device } from "../data/itemsData";
import Sidebar from "../components/Sidebar";
import './NeedToBlowUp.css';

const categories = { wood, stone, iron, steel, titanium, device };

export default function NeedToBlowUp({ onConfirm, onBack }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItems, setSelectedItems] = useState({});

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleItemClick = (item) => {
        setSelectedItems(prevSelectedItems => {
            const newSelectedItems = { ...prevSelectedItems };
            if (newSelectedItems[item]) {
                newSelectedItems[item] += 1;
            } else {
                newSelectedItems[item] = 1;
            }
            return newSelectedItems;
        });
    };

    const handleItemDecrease = (item) => {
        setSelectedItems(prevSelectedItems => {
            const newSelectedItems = { ...prevSelectedItems };
            if (newSelectedItems[item] > 1) {
                newSelectedItems[item] -= 1;
            } else {
                delete newSelectedItems[item];
            }
            return newSelectedItems;
        });
    };

    const handleConfirm = () => {
        const formattedItems = Object.entries(selectedItems).map(([key, value]) => `${key}-${value}`);
        onConfirm(formattedItems);
    };

    return (
        <>
            <h2>Choose what you need to blow up</h2>
            <div className="need-to-blow-up-container">
                <Sidebar
                    categories={categories}
                    onSelect={handleCategorySelect}
                    selectedCategory={selectedCategory}
                />
                <div className="items-grid">
                    {selectedCategory && categories[selectedCategory].map((item, index) => (
                        <div key={index}
                             className={`item-container ${selectedItems[`${selectedCategory}-${item}`] ? 'selected' : ''}`}
                             onClick={() => handleItemClick(`${selectedCategory}-${item}`)}>
                            <div className="item-content">
                                {item}
                            </div>
                            {selectedItems[`${selectedCategory}-${item}`] && (
                                <div className="item-quantity">
                                    <button className="quantity-button" onClick={(e) => {
                                        e.stopPropagation();
                                        handleItemDecrease(`${selectedCategory}-${item}`);
                                    }}>-
                                    </button>
                                    <span>{selectedItems[`${selectedCategory}-${item}`]}</span>
                                    <button className="quantity-button" onClick={(e) => {
                                        e.stopPropagation();
                                        handleItemClick(`${selectedCategory}-${item}`);
                                    }}>+
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="navigate-button-container">
                <div className="navigate-button-background">
                    <button className="navigate-button" onClick={onBack}>Back</button>
                    <button className="navigate-button" onClick={handleConfirm}>Next</button>
                </div>
            </div>
        </>
    );
}
