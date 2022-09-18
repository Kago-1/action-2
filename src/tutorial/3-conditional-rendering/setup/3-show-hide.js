import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className='btn' onClick={()=>setShow(!show)}>show/hide</button>
      {show && <Item/>}
      
    </div>
  )
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = (() => {
    setSize(window.innerWidth)
  });
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    //clean up function cleans up effect from previous render before rerendering
    //dependency array tells React to skip unnecessarily rerunning of the effect unless there are changes in one of the dependencies since last render
    return () => { window.removeEventListener('resize', checkSize) };
  }, [])
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size :{size}px</h2>
    </div>
  )
}

export default ShowHide;
