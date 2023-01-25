import React from 'react'
import Todo from '../Todo/Todo'



const TodoList = ({todos, todoDelete, todoToogleChange,setTodoEdit}) => {
    
  return (
    <div className='flex flex-col h-full w-3/5'>
        {
          todos.length === 0 
          ?(<div className=' rounded-lg bg-blue-50 border-t border-b text-blue-400 px-4 py-3 w-full text-center '>No hay tareas a realizar </div>)
          
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