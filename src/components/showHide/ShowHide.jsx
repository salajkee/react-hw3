import React, { useState } from 'react';
import './ShowHide.css';

const ShowHide = () => {
  const [isHidden, setIsHidden] = useState(false);

  const onShow = () => {
    setIsHidden(false);
  };

  const onHide = () => {
    setIsHidden(true);
  };

  const style = isHidden ? { display: 'none' } : { display: 'inline' };

  return (
    <div className="show-hide">
      <button onClick={onShow}>show</button>
      <button onClick={onHide}>hide</button>
      <label>
        <span>An input field!</span>
        <input type="text" style={style} />
      </label>
    </div>
  );
};

export default ShowHide;
