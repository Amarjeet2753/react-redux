
import React, { useCallback, useState } from 'react'


const ChildCmp = ({handleClick})=>{

      
    console.log("child render")
    
     return (
        <div>

        <button onClick={handleClick}> Click here</button>
        </div>
     )
}


// const ChildCmp = React.memo(({ handleClick }) => {
//   console.log("Child re-rendered"); // ✅ Only logs when handleClick changes
//   return <button onClick={handleClick}>Click me</button>;
// });

const ExampleUseCallback = () => {
  
  const [count ,setCount] =useState(0)
  console.log("parent render")
  
  // const handleClick =()=>{
  //    console.log("child button clicked")
  // }

  const handleClick = useCallback(()=>{
    console.log("child button clicked")
  },[])

  return (
    <div>
      
      <button onClick={()=>setCount(count+1)}>Count : {count}</button>
      <ChildCmp handleClick={handleClick}/>

    </div>
  )
}

export default ExampleUseCallback