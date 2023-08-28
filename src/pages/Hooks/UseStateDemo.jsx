import React, {useState} from 'react'

const UseStateDemo = () => {
    const [number,setNumber] = useState(1);
    const [img, setImg] = useState('https://i.pravatar.cc?u=1')
  return (
    <div className='container'>
        <h3>Ví dụ 1</h3>
        <h3>Number : {number}</h3>
        <button className='btn btn-dark' onClick={() => {
            setNumber(number + 1);
        }}>+</button>
        <div className="mt-2">
            <h3>Ví dụ 2</h3>
            <div className="card w-25">
                <div className="card">
                    <img src={img} alt={"..."} />
                    <div className="card-body">
                        <button className="btn btn-danger" onClick={() => {
                            let newImg = `https://i.pravatar.cc?u=${Math.floor(Math.random() * 100)}`
                            setImg(newImg)
                        }}>Random</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UseStateDemo