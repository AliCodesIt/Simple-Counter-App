import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  const subtract = () => {
    setCount(count - 1)
  }
  const addtwo = () => {
    setCount(count + 2)
  }
  const subtracttwo = () => {
    setCount(count - 2)
  }
  const reset = () => {
    setCount(0)
  }
  useEffect(() => {
    document.title = `You Clicked ${count} times!`
  }, [count] )
  return(
    <div className='App' >
      <button className='btn' onClick={subtract} >-</button>
      <div className='Counter' >
          <button className='btn2' onClick={addtwo} >+2</button>
          <h1 id='Number'>{count}</h1>
          <button className='btn2' onClick={subtracttwo} >-2</button>
          <h1 className='Reset' onClick={reset} >Reset</h1>
      </div>
      <button className='btn' onClick={add} >+</button>
    </div>
  )
}

export default App;
