import React from 'react';

const Edges = ({ edges, nodes }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
    {edges.map((edge, index) => {
      const fromNode = nodes.find(node => node.id === edge.from);
      const toNode = nodes.find(node => node.id === edge.to);
      return (
        <line key={index} x1={fromNode.x} y1={fromNode.y} x2={toNode.x} y2={toNode.y} stroke="black" strokeWidth="2" />
      );
    })}
  </svg>
);

export default Edges;