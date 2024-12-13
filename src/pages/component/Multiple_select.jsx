import React, { useState } from 'react';
import styles from '../../styles/Fliterbar.module.css';

const Multiple = () => {
  const [inputValue, setInputValue] = useState(''); // State for the input value
  const [isDropdownActive, setIsDropdownActive] = useState(false); // State for dropdown visibility

  const handleOptionClick = (option) => {
    setInputValue(option); // Set the clicked option as input value
    setIsDropdownActive(false); // Hide the dropdown
  };

  return (
    <div className={styles.search_bar_right}>
      <h5>タスク</h5>

      <div className={styles.input_dropdown_container}>
        <input
          type="text"
          id="input-box"
          className={styles.input_dropdown}
          placeholder="- - --複数選択可能-- - -"
          value={inputValue}
          onFocus={() => setIsDropdownActive(true)} // Show dropdown on focus
          onBlur={() => setTimeout(() => setIsDropdownActive(false), 200)} // Delay hiding to allow clicks
          onChange={(e) => setInputValue(e.target.value)} // Handle user typing
        />
        <span className={styles.arrow_icon}>&#9660;</span>
        {isDropdownActive && (
          <div id="dropdown" className={styles.dropdown_content}>
            <div onClick={() => handleOptionClick('Option 1')}>Option 1</div>
            <div onClick={() => handleOptionClick('Option 2')}>Option 2</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Multiple;
