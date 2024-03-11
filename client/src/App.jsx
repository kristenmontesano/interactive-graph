import React from 'react';
import { createRoot } from 'react-dom/client';
import Graph from './components/Graph';

function App() {
  return (
    <div>
      <Graph />
    </div>
  );
}

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);