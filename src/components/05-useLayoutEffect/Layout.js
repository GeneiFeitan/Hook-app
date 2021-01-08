import React from 'react';
import '../02-useEffect/effects.css'
import {UseFetch} from "../hooks/useFetch"
import {UseCounter} from "../hooks/useCounter";


export const Layout = (props) => {

    const {counter, increment} = UseCounter(1);

    const {loading, data} = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data && data[0];
    return (
        <>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p className="mb-0"> {quote} </p>
            </blockquote>


            <button className='btn btn-primary' onClick={increment}> Siguiente quote</button>
        </>
    )
};