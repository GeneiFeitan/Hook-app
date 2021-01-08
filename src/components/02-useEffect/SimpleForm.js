import React,{useEffect,useState} from 'react';

import './effects.css'
import {Message} from "./Message";

export const SimpleForm = (props) => {

    const [state, setState] = useState({
        name:'',
        email:''
    });

    const {name,email}=state;

    useEffect(() => {
        // console.log('hey')

    },[]);

    useEffect(() => {
        // console.log('formulario cambiio')

    },[state]);

    useEffect(() => {
        // console.log('email cambio')

    },[email]);

    const handleInputchange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputchange}
                />
            </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputchange}
                />
            </div>

            {(name==='123')&&<Message/>}
        </>
    )
}