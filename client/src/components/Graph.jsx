import React, { useState, useEffect } from 'react';
import Node from './Node';

const Graph = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    // init graph
    setNodes([
      { id: 'A', x: 100, y: 100 },
      { id: 'B', x: 200, y: 200 },
      { id: 'C', x: 300, y: 100 },
      { id: 'D', x: 300, y: 200 },
      { id: 'E', x: 500, y: 100 },
      { id: 'F', x: 600, y: 200 },
      { id: 'G', x: 700, y: 300 },
      { id: 'H', x: 800, y: 200 },
      { id: 'I', x: 900, y: 100 },
      { id: 'J', x: 100, y: 300 },
      { id: 'K', x: 300, y: 300 },
      { id: 'L', x: 700, y: 100 },
    ]);
    setEdges([
      { from: 'A', to: 'B' },
      { from: 'A', to: 'C' },
      { from: 'B', to: 'D' },
      { from: 'C', to: 'E' },
      { from: 'D', to: 'F' },
      { from: 'F', to: 'G' },
      { from: 'G', to: 'H' },
      { from: 'H', to: 'I' },
      { from: 'F', to: 'H' },
      { from: 'B', to: 'J' },
      { from: 'B', to: 'K' },
      { from: 'F', to: 'L' },
    ]);
    setVisited([]);
  }, []);

  const bfs = (startNode) => {
    // init queue with startNode
    let queue = [startNode];
    let visitedOrder = [];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (!visitedOrder.includes(currentNode)) {
        visitedOrder.push(currentNode);
        // add neighbors to the queue
        let fromNeighbors = edges.filter(edge => edge.from === currentNode).map(edge => edge.to);
        let toNeighbors = edges.filter(edge => edge.to === currentNode).map(edge => edge.from);
        queue = [...queue, ...fromNeighbors, ...toNeighbors];
      }
    }

    // animate the traversal in order
    visitedOrder.forEach((node, index) => {
      setTimeout(() => {
        setVisited(visited => [...visited, node]);
      }, index * 750);
    });
  };

  return (
    <div>
      {/* draw edges */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {edges.map((edge, index) => {
          const fromNode = nodes.find(node => node.id === edge.from);
          const toNode = nodes.find(node => node.id === edge.to);
          return (
            <line key={index} x1={fromNode.x} y1={fromNode.y} x2={toNode.x} y2={toNode.y} stroke="black" strokeWidth="2" />
          );
        })}
      </svg>
      {/* draw nodes */}
      {nodes.map(node => (
        <Node key={node.id} id={node.id} visited={visited.includes(node.id)} x={node.x} y={node.y} />
      ))}
      <button style={{ position: 'relative', zIndex: 1000 }} onClick={() => { console.log('started'); bfs(nodes[0].id) }}>Start BFS</button>
    </div>
  );
};

export default Graph;