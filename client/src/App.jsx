import React from 'react';
import { createRoot } from 'react-dom/client';
import Graph from './components/Graph';
import BFSDescription from './components/BFSDescription';

function App() {
  return (
    <div>
      <BFSDescription />
      <Graph />
    </div>
  );
}

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);