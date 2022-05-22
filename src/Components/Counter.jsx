import React from 'react'
import './Counter.css'
const Counter = () => {
    const [count,setCount]=React.useState(0)
   const counters=(value)=>{
       setCount(count+value)
   }
   const double=()=>{
          setCount(count*2)
   }
  return (
    <div>
    <h1 style={count%2===0? {color:'green'}:{color:'red'}}>Counter App:{count}</h1>
    <button className='increase' onClick={() =>counters(1)}>Increment</button>
    <button className="decrese"onClick={() =>{if(count > 0){counters(-1)}}}>Decrement</button>
    <button className="double"onClick={() =>double()}>Double</button>
    </div>
  )
}

export default Counter
