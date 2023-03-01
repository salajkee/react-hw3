import React, { useState } from 'react';
import './ShowDialog.css';

const ShowDialog = () => {
  const [isHidden, setIsHidden] = useState(true);

  const onShow = () => {
    setIsHidden(false);
  };

  const onHide = () => {
    setIsHidden(true);
  };

  const style = isHidden ? {} : { opacity: 1, visibility: 'visible' };

  return (
    <div className="show-dialog">
      <button onClick={onShow} className="show-btn">
        Show dialog
      </button>

      <div className="dialog" style={style}>
        <div className="overlay"></div>
        <div className="dialog__inner">
          <p>Dialog</p>
          <p>Body</p>
          <button onClick={onHide} className="hide-btn">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDialog;
