import React, { useState } from 'react';
import "./Dropdown.css"
function Dropdown() {
  const [selectedValue, setSelectedValue] = useState(''); // State to manage selected value

  const handleSelectionChange = (event) => {
    setSelectedValue(event.target.value); // Update selected value when dropdown changes
  };

  return (
    <div   className="dropdown-container">
      {/* <h2>Dropdown Example</h2> */}
      <select value={selectedValue}  className="dropdown-select" onChange={handleSelectionChange}>
        <option value="">Select an option</option>
        <option value="option1"   className="dropdown-option">Arise</option>
        <option value="option2"   className="dropdown-option">Aquarious</option>
        <option value="option3"   className="dropdown-option">Cancer</option>
        <option value="option1"   className="dropdown-option">Capricon</option>
        <option value="option2"   className="dropdown-option">Gemini</option>
        <option value="option3"   className="dropdown-option">Leo</option>
        <option value="option1"   className="dropdown-option">Libra</option>
        <option value="option2"   className="dropdown-option">Pisces</option>
        <option value="option3"   className="dropdown-option">Sagitarious</option>
        <option value="option1"   className="dropdown-option">Scorpio</option>
        <option value="option2"   className="dropdown-option">Taurus</option>
        <option value="option3"   className="dropdown-option">Virgo</option>
      </select>
      {/* <p>Selected value: {selectedValue}</p> */}
    </div>
  );
}

export default Dropdown;
