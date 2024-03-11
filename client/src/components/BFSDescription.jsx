import React from 'react';

const BFSDescription = () => {
  return (
    <div style={{ margin: '20px' }}>
      <h2>Breadth-First Search (BFS) Traversal</h2>
      <p>BFS is an algorithm for searching a graph or tree data structure.</p>
      <p>It starts at a selected node and explores each of it's neighbor nodes, before moving on to the next level of neighbors, until all nodes have been searched or the target node is found.</p>
      <p>Select a start and end node, then click 'Start BFS' to see the algorithm in action.</p>
    </div>
  );
};

export default BFSDescription;