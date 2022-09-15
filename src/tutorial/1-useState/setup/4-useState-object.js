import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Peter', age: '26', msg: 'hi' })
  const changeMesssage = () => {

    setPerson({ ...person, msg: 'hey you' });
  
  }
  
  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.msg}</h2>
      <button onClick={changeMesssage}>change Messsage</button>
  </div>
  )
};

export default UseStateObject;
