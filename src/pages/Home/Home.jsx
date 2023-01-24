import React, { useEffect, useState } from 'react'
import Clock from '../../components/Clock/Clock'
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

  const localTodos = JSON.parse(localStorage.getItem('todos')) //aqui se almacenan las todos previas al refrescar la pagina
function Home() {

  const [todos, setTodos] = useState(localTodos || []);
  const [todoEdit, setTodoEdit] = useState(null)

  useEffect(()=>{ //Utilizamos el useEffect para escuchar a las todos y guardarlas en el localStorage
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  
  const todoDelete = (todoId) => {
    if(todoEdit && todoId === todoEdit.id){
      setTodoEdit(null);
    }
    const changesTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(changesTodos);
  }

  const todoToogleChange = (todoId) => {
    const changedTodos = todos.map(todo => {
      const todoEdit = {
        ...todo,
        completed: !todo.completed
      }

      if(todo.id === todoId){
        return todoEdit
      }
      else{
        return todo
      }
    })

    setTodos(changedTodos)
  }

  const todoAdd = (todo)=>{
    const newTodo = {
      id:Date.now(),
      ...todo,
      completed:false
    }

    const changedTodos = [
      newTodo,
      ...todos
    ]

    setTodos(changedTodos);
  } 

  const todoUpdate = (todoEdit)=>{
    const changedTodos = todos.map(todo => (
      todo.id === todoEdit.id
      ? todoEdit
      :todo
    ))
    setTodos(changedTodos)
  }

  return (
  <div className='home-card w-full h-full  lg:w-4/5 lg:h-4/5 lg:rounded-2xl lg:shadow-2xl'>

    <div>
      <Clock/>
    </div>

    <div className='' >
    

      <TodoList 
        todos={todos}
        todoDelete={todoDelete}
        todoToogleChange={todoToogleChange}
        setTodoEdit = {setTodoEdit}
          
      />

        
        
      <TodoForm
        todoUpdate={todoUpdate}
        todoEdit={todoEdit}
        todoAdd={todoAdd}
        setTodoEdit = {setTodoEdit}
      />
    
    </div>

  </div>
  )
}

export default Home