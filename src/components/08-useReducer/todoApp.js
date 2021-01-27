import React, {useReducer,useEffect} from 'react'

import {useForm} from "../hooks/useForm";

import './styles.css'
import {todoReducer} from "./todoReducer";

const initialState = []

const init=()=>{
    return JSON.parse(localStorage.getItem('todos')||[]);
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [],init);
    const [{description},handleInputChange,reset]=useForm({
        description:''
    })

    useEffect(() => {

        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);
    
    const handleDelete=(todoId)=>{
        const action={
            type:'delete',
            payload: todoId
        }
        dispatch(action)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(description.trim().length<=1){
            return;
        }
        console.log('nueva tarea')
        const newTodo={
            id: new Date().getTime(),
            desc: description,
            donde: false
        }

        const action={
            type:'add',
            payload:newTodo
        }

        dispatch(action);
        reset();
    }


    console.log(todos);
    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className='list-group-item'
                                >
                                    <p className='text-center'>{i + 1}.{todo.desc}
                                    </p>

                                    <button className='btn btn-danger'
                                    onClick={e=>handleDelete(todo.id)}>
                                        borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>


                </div>

                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr/>


                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            value={description}
                            type='text'
                            name='description'
                            className='form-control'
                            placeholder='Aprender...'
                            autoComplete='off'
                        />

                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1 btn-block'>
                            Agregar
                        </button>

                    </form>
                </div>

            </div>

        </>
    )
}