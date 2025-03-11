import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'

import { incrementCount ,decrementCount} from './redux/actions/counterActions'

const Counter = () => {
 
//    const [count,setCount] = useState(0) 
 const count = useSelector(state => state.counter)
 const dispatch =useDispatch()

 console.log(count)

  return (
    <div className='flex justify-center items-center flex-col'>

    <div className='m-2 p-2'>Count : {count.count}</div>
    <div>

    {/* <button onClick={()=>dispatch({type :'INCREMENT_COUNT'})} className='m-2 p-2 bg-gray-500'>Increment</button> */}
    <button onClick={()=>dispatch(incrementCount())} className='m-2 p-2 bg-gray-500'>Increment</button>
    </div>
    <div>

    <button onClick={()=>dispatch(decrementCount())} className='m-2 p-2 bg-gray-500'>Decrement</button>
    </div>
    </div>
  )
}

export default Counter