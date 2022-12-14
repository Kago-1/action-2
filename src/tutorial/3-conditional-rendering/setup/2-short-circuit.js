import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <div>
      <h1>{firstValue}</h1>
      <h2>{secondValue}</h2>
      {/* {!text && 'hello world'}
      {!text && <h1>hello world</h1>} */}
      <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {/* ternary oprator */}
      {isError ? (<p>there is an error..</p>) : <div>
      <h3>there is no error...</h3>
      </div>}
    </div>
  )
};

export default ShortCircuit;
