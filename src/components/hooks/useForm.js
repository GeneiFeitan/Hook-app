import  {useState} from 'react';


export const useForm = (initialState={}) => {

    const [state, setState] = useState(initialState);

    const handleInputchange=({target})=>{
        setState({
            ...state,
            [target.name]:target.value
        })
    }

    return [state,handleInputchange]
}