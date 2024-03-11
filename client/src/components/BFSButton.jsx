import React, { useState, useEffect } from 'react';

const BFSButton = ({ onStartBFS, animationInProgress, onReset }) => {
  const [buttonLabel, setButtonLabel] = useState('Start BFS');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (animationInProgress) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [animationInProgress]);

  const handleClick = () => {
    if (buttonLabel === 'Start BFS') {
      onStartBFS();
      setButtonLabel('Reset');
    } else {
      onReset();
      setButtonLabel('Start BFS');
    }
  };

  if (!isVisible) return null;

  return (
    <button
      style={{ position: 'relative', zIndex: 1000 }}
      onClick={handleClick}
    >
      {buttonLabel}
    </button>
  );
};

export default BFSButton;