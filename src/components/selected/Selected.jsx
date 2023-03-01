import React, { useState } from 'react';
import './Selected.css';
const Selected = () => {
  const [select, setSelect] = useState('Bacon');

  const onChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="selected">
      <span>Selected: {select}</span>

      <select name="select" value={select} onChange={onChange}>
        <option value="Bacon">Bacon</option>
        <option value="Tuna">Tuna</option>
        <option value="Tuna plants">Tuna Plants</option>
      </select>
    </div>
  );
};

export default Selected;
