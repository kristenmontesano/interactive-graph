import React, { useState, useEffect } from 'react';

const BFSButton = ({ onStartBFS, animationInProgress, onReset }) => {
  const [startNode, setStartNode] = useState('A');
  const [endNode, setEndNode] = useState('I');
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
      onStartBFS(startNode, endNode);
      setButtonLabel('Reset');
    } else {
      onReset();
      setButtonLabel('Start BFS');
    }
  };

  if (!isVisible) return null;

  return (
    <div style={{ margin: '20px' }}>
      <label htmlFor="startNode" style={{ marginRight: '2px' }}>Start Node:</label>
      <select id="startNode" value={startNode} onChange={(e) => setStartNode(e.target.value)} style={{ position: 'relative', zIndex: 1000, marginRight: '10px' }}>
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map(letter => (
          <option key={letter} value={letter}>{letter}</option>
        ))}
      </select>
      <label htmlFor="endNode" style={{ marginRight: '2px' }}>End Node:</label>
      <select id="endNode" value={endNode} onChange={(e) => setEndNode(e.target.value)} style={{ position: 'relative', zIndex: 1000, marginRight: '10px' }}>
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map(letter => (
          <option key={letter} value={letter}>{letter}</option>
        ))}
      </select>
      <button style={{ position: 'relative', zIndex: 1000, color: 'white', backgroundColor: 'green', border: 'none', padding: '5px 10px', borderRadius: '5px' }} onClick={handleClick}>{buttonLabel}</button>
    </div>
  );
};

export default BFSButton;