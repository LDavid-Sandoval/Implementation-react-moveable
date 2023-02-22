import React from "react";

const ComponentHeader = ({ addItem }) => {
  return (
    <div className='container-header'>
      <div className='elements-header'>
        <p>
          Test técnico de Luis David Sandoval López para vacante de
          Desarrollador React.JS en Kosmos
        </p>
        <button className='item-button' onClick={addItem}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ComponentHeader;
