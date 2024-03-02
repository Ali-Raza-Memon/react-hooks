import React,{ useState } from 'react'

const Home = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <p>count : {count}</p>
        <div className='space-x-4'>
            <button onClick={()=>setCount(count+1)} className='px-2 my-3 bg-blue-700 text-white '>Add</button>
            <button onClick={()=>setCount(count-1)} className='px-2 my-3 bg-yellow-500 text-white'>Minus</button>
        </div>
    </div>
  )
}

export default Home