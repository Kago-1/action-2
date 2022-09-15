import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(0)[1]
  // const handler = useState(1)[1]

  const [text, setText] = useState('wake up');
  const eventHandler = () => {
    if (text === 'wake up') {
      setText('Sleep');
    } else {
      setText('wake up');
    }
  };
  return (
    <React.Fragment><h1>{text}</h1>,
      <button className='btn' type='button' onClick={eventHandler}>Change title</button>
    </React.Fragment>
    
  );
};

export default UseStateBasics;
