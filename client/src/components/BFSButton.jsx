import React from 'react';

const BFSButton = ({ onStartBFS }) => (
  <button style={{ position: 'relative', zIndex: 1000 }} onClick={onStartBFS}>
    Start BFS
  </button>
);

export default BFSButton;