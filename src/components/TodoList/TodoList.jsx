import React from 'react'
import Todo from '../Todo/Todo'



const TodoList = ({todos, todoDelete, todoToogleChange,setTodoEdit}) => {
    
  return (
    <div>
        <h1>TodoList</h1>
        {
          todos.length === 0 
          ?(<div className='alert alert-primary'>No hay tareas a realizar </div>)
          
          :todos.map(todo =>{ 
            return <Todo 
            todo={todo} 
            todoDelete={todoDelete}
            todoToogleChange={todoToogleChange}
            key = {todo.id}
            setTodoEdit={setTodoEdit}
            />
            
         })
        }
    </div>
  )
}

export default TodoList