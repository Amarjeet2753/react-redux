import React, { useEffect, useRef, useState } from 'react'

const ExampleUseRef = () => {

  const[count,setCount] =useState(0)
  const useRefCount = useRef(0)
  
  const commentRef = useRef(null)

  // console.log("useRefcnt = ",useRefCount)
  // console.log("render while count update ")


  useEffect(()=>{
    commentRef.current.focus()
    console.log("use Effect working")
  })
  useEffect(()=>{
    // commentRef.current.focus()
    console.log("use Effect 2 working")
  },[])

  return (
    <div className=''>
    
    <div className='w-[40%] m-auto'>

    <h1>Vite + React</h1>
    <div className="">
      <button onClick={() => setCount((count) => count + 1)} className='bg-gray-400 text-white m-2 p-2'>
        count is {count}
      </button>
      <button onClick={() => useRefCount.current += 1} className='bg-gray-400 text-white m-2 p-2'>
       ref count is {useRefCount.current}
      </button>

      <p> here ref count will update when we click but than change will not reflect to ui because it not re-render</p>
      <div className='flex flex-col'>
        <label htmlFor="comment" className='text-2xl font-bold m-2'>Comment focused when render.</label>
        <textarea name='comment' rows={4} cols={8} ref={commentRef} className='border-2 border-gray-400'></textarea>
      </div>
    </div>
    </div>
   
  </div>
  )
}

export default ExampleUseRef