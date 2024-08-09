import { useState, useRef, useEffect } from "react";
import "../styles/Dropdown.scss";
import { formatStringToCamelCase } from "../utils/Format";

const Dropdown = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (option === null || option.includes(placeholder)) {
      setSelectedOption(null);
      onSelect(null);
    } else {
      setSelectedOption(option);
      onSelect(option);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption
          ? formatStringToCamelCase(selectedOption)
          : formatStringToCamelCase(placeholder)}
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-list-item"
              onClick={() => handleOptionClick(option)}
            >
              {formatStringToCamelCase(option)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
