import React, {useState, useEffect} from 'react'

const UseEffectDemo = () => {

    const [number, setNumber] = useState(1);

    // Trường hợp 1: useEffect 1 tham số

  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn btn-dark' onClick={() => {
            setNumber(number + 1);
        }}>+</button>
        
    </div>
  )
}

export default UseEffectDemo