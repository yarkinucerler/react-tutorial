import React, { useState, useRef, useEffect } from "react";

import "./filterSelect.scss";

type Props = {
  data: { key: string; value: string }[];
  title: string;
  icon: React.ReactNode;
  setFilter: (newSelection: string) => void;
};

const FilterSelect: React.FC<Props> = ({ data, title, icon, setFilter }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e: Event) => {
      if (menuRef.current !== null && !menuRef.current.contains(e.target)) {
        setIsVisible(!isVisible);
      }
    };

    // Eğer menü gösteriliyorsa, sayfadaki her tıklamayı dinle
    if (isVisible) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isVisible]);

  const toggleDropdown = () => setIsVisible(!isVisible);

  const handleClick = (key: string) => {
    setFilter(key);
    toggleDropdown();
  };

  return (
    <div className="dropdown" ref={menuRef}>
      <button onClick={toggleDropdown} className="dropdown-button">
        <span>{title}</span>
        {icon}
      </button>
      {isVisible && (
        <ul className="dropdown-content">
          {data.map(({ key, value }: any) => (
            <li key={key} onClick={() => handleClick(key)}>
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSelect;
