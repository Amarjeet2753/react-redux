import { USER_FETCH_FAILURE, USER_FETCH_REQUEST, USER_FETCH_SUCCESS } from "../constants/userConstant"


const initialState ={
    loading : false,
    errors  : null,
    users :[]
    
}


const userReducer =(state=initialState ,action)=>{
     
    switch(action.type){
        
        case USER_FETCH_REQUEST:  return {
            ...state,
            loading :true
        }

        case USER_FETCH_SUCCESS : return{
            ...state,
            loading :false,
            users : action.payload
        }

        case USER_FETCH_FAILURE : return{
            ...state,
            loading :false,
            users :[],
            errors :action.payload
        }
         
        default : return state
    }
}


export default userReducer