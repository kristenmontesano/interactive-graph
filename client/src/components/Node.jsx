import React from 'react';

const Node = ({ id, visited, x, y }) => {
  const size = 30;
  const style = {
    backgroundColor: visited ? 'green' : 'red',
    borderRadius: '50%', // make it a circle
    width: `${size}px`,
    height: `${size}px`,
    position: 'absolute',
    left: `${x - size / 2}px`,
    top: `${y - size / 2}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: '1px solid black',
  };

  return (
    <div style={style}>
      {id}
    </div>
  );
};

export default Node;