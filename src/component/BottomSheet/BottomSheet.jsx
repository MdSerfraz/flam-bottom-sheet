import React, { useState } from 'react';
import './BottomSheet.css';

const BottomSheet = () => {
  const [sheetState, setSheetState] = useState('closed');

  const handleOpen = () => {
    setSheetState('open');
  };

  const handleHalfOpen = () => {
    setSheetState('half-open');
  };

  const handleClose = () => {
    setSheetState('closed');
  };

  return (
    <div className={`bottom-sheet ${sheetState}`}>
      <div className="handle" onClick={handleHalfOpen}></div>
      <div className="content">
        <p>This is the bottom sheet content.</p>
      </div>
      <div>
        <button onClick={handleOpen}>Fully Open</button>
        <button onClick={handleHalfOpen}>Half Open</button>
        <button onClick={handleClose}>Close</button>
      </div>

    </div>
  );
};

export default BottomSheet;