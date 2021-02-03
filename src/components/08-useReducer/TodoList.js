import React from 'react'
import {TodoListItem} from './TodoListItem'

export const TodoList=({todos, handleDelete, handleToggle})=>{

    return(
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo,i)=>(
                     <TodoListItem todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} i={i} key={todo.id}/>
                ))

            }

        </ul>

    )
}