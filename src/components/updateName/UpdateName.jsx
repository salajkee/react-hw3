import React, { useState } from 'react';
import './UpdateName.css';

const UpdateName = () => {
  const [name, setName] = useState('');
  const [updName, setUpdName] = useState('Vasya');

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSave = () => {
    setUpdName(name);
    setName('');
  };

  return (
    <div className="update-name">
      <h3>Hello, {updName}!</h3>
      <label>
        <span>Update Name</span>
        <input type="text" name="name" value={name} onChange={onChange} />
        <button onClick={onSave}>Save</button>
      </label>
    </div>
  );
};

export default UpdateName;
