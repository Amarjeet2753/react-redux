import React from 'react'

import { useTheme } from './hooks/useTheme'

const Home = () => {


  
  const {theme,toggleTheme} =useTheme()
  
  return (
    <div className={`${theme==='dark'? 'bg-slate-500  text-white' : 'bg-white text-black'}  min-h-screen` }>
         <h1 className='text-center font-bold text-3xl m-2'>Home Page</h1>

         <button className='px-4 py-2 m-2 bg-gray-400' onClick={toggleTheme} >Toggle</button>
    </div>
  )
}

export default Home