
import { USER_FETCH_REQUEST,USER_FETCH_SUCCESS,USER_FETCH_FAILURE } from "../constants/userConstant";

import axios from "axios";

export const fetchUser =()=>{
    return (dispatch)=>{
        dispatch(fetchUserReq())
        axios.get('https://dummyjson.com/users')
        .then(response =>{
            const users = response.data
            // console.log("ua=",users)
            dispatch(fetchUserSuccess(users.users))
         }

        ).catch(errors =>{
            dispatch(fetchUserFailure(errors))
        })

    }
}


export const fetchUserReq =()=>{
    return {
        type : USER_FETCH_REQUEST
    }
}

export const fetchUserSuccess =(users)=>{
    return {
        type : USER_FETCH_SUCCESS,
        payload : users
    }
}

export const fetchUserFailure =(errors)=>{
    return {
        type : USER_FETCH_FAILURE,
        payload : errors
    }
}


