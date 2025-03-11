import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ExampleUseRef from './ExampleUseRef'
import ExampleUseCallback from './ExampleUseCallback'

import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { useTheme } from './hooks/useTheme'

import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'

import { RouterProvider } from 'react-router-dom'
import Counter from './Counter'
import User from './User'

const router = createBrowserRouter([
  {
    path :'/',
    element : <Home />,
  },
  {
    path : '/about',
    element : <About/>
  }
])


function App() {
 

  return (


    // <ExampleUseRef/>
    // <ExampleUseCallback/>
    
    // <RouterProvider router={router}></RouterProvider>
    <div>

    <Counter/>
    <User/>
    </div>
  )
}

export default App
