import React from 'react'
import Todo from '../Todo/Todo'



const TodoList = ({todos, todoDelete}) => {
    
  return (
    <div>
        <h1>TodoList</h1>
        {todos.map(todo =>{ 
           return <Todo 
           todo={todo} 
           todoDelete={todoDelete}
           key = {todo.id}/>
        })}
    </div>
  )
}

export default TodoList