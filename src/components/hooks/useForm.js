import  {useState} from 'react';

//Es para modificar los campos del formulario

export const useForm = (initialState={}) => {

    const [state, setState] = useState(initialState);

    const reset=()=>{
        setState(initialState)
    }

    const handleInputchange=({target})=>{
        setState({
            ...state,
            [target.name]:target.value
        })
    }

    return [state,handleInputchange,reset]
}