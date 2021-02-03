import {useState} from 'react';

export const useCounter = (initState=10) => {

    const [state, setState] = useState(initState);

    const reset=()=>{
        setState(initState)
    }
    const increment=()=>{
        setState(state+1)
    }
    const decrement=()=>{
        setState(state-1)
    }

    return{
        counter:state,
        reset,
        decrement,
        increment
    }


}