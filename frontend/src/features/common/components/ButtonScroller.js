import React, { useState } from "react";

const ButtonScroller = ({ currentIndex, totalItems, onIndexChange, item_type }) => {
    const [jumpIndex, setJumpIndex] = useState('');

    const handleFirst = () => {
        onIndexChange(0);
    };
    const handlePrevious = () => {
        onIndexChange((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };
    const handleNext = () => {
        onIndexChange((prevIndex) => (prevIndex + 1) % totalItems);
    };
    const handleLast = () => {
        onIndexChange(totalItems - 1);
    };

    const handleJump = () => {
        const index = parseInt(jumpIndex, 10) - 1; //Adjust for base 0 index
        if (index >= 0 && index < totalItems) {
            onIndexChange(index)
        }
        else {
            alert('Invalid '+ item_type +' number');
        }
        setJumpIndex('');
    }
    const handleInputChange = (e) => {
        setJumpIndex(e.target.value);
    }

    return (
        <div>
            <div>
                <button onClick={handleFirst} disabled={totalItems <= 1}>First</button>
                <button onClick={handlePrevious} disabled={totalItems <= 1}>Previous</button>
                <button onClick={handleNext} disabled={totalItems <= 1}>Next</button>
                <button onClick={handleLast} disabled={totalItems <= 1}>Last</button>
            </div>

            <div>
                <input 
                    type="number"
                    value={jumpIndex}
                    onChange={handleInputChange}
                    placeholder={currentIndex+1}
                />
                <button onClick={handleJump}>Jump to {item_type}</button>
                <p>{item_type} {currentIndex + 1} of {totalItems}</p>
            </div>
        </div>
    );
}

export default ButtonScroller;