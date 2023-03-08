import React from "react";

const ComponentHeader = ({ addItem }) => {
  return (
    <div className='container-header'>
      <div className='elements-header'>
        <p>
          Implementation react-moveable in React.JS - Luis David Sandoval López
        </p>
        <button className='item-button' onClick={addItem}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ComponentHeader;
