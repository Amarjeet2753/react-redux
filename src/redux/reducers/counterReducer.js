import { INCREMENT_COUNT,DECREMENT_COUNT } from "../constants/counterConstant";




const initialState = {
    count : 0,
}


const couterReducer = (state=initialState , action)=>{
     
    switch(action.type){
        case INCREMENT_COUNT : return {
            ...state,
            count : state.count+1,
        }

        case DECREMENT_COUNT : return {
            ...state ,
            count : Math.max(0,state.count-1) 
        }

        default :
         return state
    }
}

export default couterReducer