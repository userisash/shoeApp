import React from 'react';

function DeleteButton({ shoeId, onDelete }) {
  function handleClick() {
    onDelete(shoeId);
  }

  return (
    <button onClick={handleClick}>
      Delete
    </button>
  );
}

export default DeleteButton;
