import { INCREMENT_COUNT,DECREMENT_COUNT } from "../constants/counterConstant";


export const incrementCount = ()=>{
    return {
        type : INCREMENT_COUNT
    }
}



export const decrementCount = ()=>{
    return {
        type : DECREMENT_COUNT
    }
}