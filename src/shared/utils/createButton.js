import React from 'react';

const createButton = (name, callback, key = null) => {


  return <button key={key ? key : null} onClick={callback}>{name}</button>

}

export default createButton;
