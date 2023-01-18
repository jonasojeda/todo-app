import React, { useState } from 'react'
import TodoForm from '../../components/TodoForm/TodoForm'
import TodoList from '../../components/TodoList/TodoList'

const initialTodos =[
  {
  id:1,
  title : 'todo #1',
  description: 'desc todo #1',
  completed : true
},
  {
  id:2,
  title : 'todo #2',
  description: 'desc todo #2',
  completed : false
  },

  {
  id:3,
  title : 'todo #3',
  description: 'desc todo #3',
  completed : true
  }]

function Home() {

  const [todos, setTodos] = useState(initialTodos);

  
  const todoDelete = (todoId) => {
    const changesTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(changesTodos);
  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col8'>
          <TodoList 
          todos={todos}
          todoDelete={todoDelete}
          
          />
        </div>
        <div className='col-4'>
          <TodoForm/>
        </div>
      </div>
    </div>
  )
}

export default Home