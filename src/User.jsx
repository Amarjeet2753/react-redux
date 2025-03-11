import React, {  useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { fetchUser } from './redux/actions/userActions'

const User = () => {

    const userData= useSelector(state => state.user)
    console.log(userData)
    const {loading,errors,users} =userData

    // console.log("users=",typeof users.users)

    const dispatch = useDispatch()


    useEffect(()=>{
       dispatch(fetchUser())
    },[])

  return (
    <div className='flex justify-center'>
      
      <div>
        <h1 className='font-bold text-2xl'>Users</h1>
        {
            loading && <h1>loading .....</h1>
           
        }
        {
             errors && <h1>{errors.message}</h1>
        }
        
            <ul>
                {
                
                users.map((cur) => {
                    return <li key={cur.id} className='p-2 m-2'>{cur.firstName}</li>; 
                    
                })
               }
            
            </ul>
        

      </div>


    </div>
  )
}

export default User