import React from 'react'
import Todo from '../Todo/Todo'



const TodoList = ({todos, todoDelete, todoToogleChange}) => {
    
  return (
    <div>
        <h1>TodoList</h1>
        {todos.map(todo =>{ 
           return <Todo 
           todo={todo} 
           todoDelete={todoDelete}
           todoToogleChange={todoToogleChange}
           key = {todo.id}/>
        })}
    </div>
  )
}

export default TodoList