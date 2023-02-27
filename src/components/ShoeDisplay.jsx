// ShoeCard.js

import React from 'react';

function ShoeDisplay
({ shoe, onClick }) {
  return (
    <div
      key={shoe.id}
      style={{ width: '300px', margin: '20px' }}
      onClick={onClick}
    >
      <img
        src={shoe.img}
        alt={shoe.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '10px' }}>
        <h2>{shoe.name}</h2>
        <p>{shoe.price}</p>
      </div>
    </div>
  );
}

export default ShoeDisplay
;
