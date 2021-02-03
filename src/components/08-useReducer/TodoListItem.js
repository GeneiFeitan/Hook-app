import React from 'react'
import './styles.css'

export const TodoListItem=({todo, handleToggle, handleDelete, i})=>{

    return(
        <li
            key={todo.id}
            className='list-group-item'
        >
            <p
                className={`${todo.done&&'complete'}`}
                onClick={()=>handleToggle(todo.id)}

            >
                {i + 1}.{todo.desc}
            </p>

            <button className='btn btn-danger'
                    onClick={e=>handleDelete(todo.id)}>
                borrar
            </button>
        </li>
    )
}