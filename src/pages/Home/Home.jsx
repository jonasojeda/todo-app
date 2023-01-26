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
  
    
    <div className=' mt-8 max-lg:shadow-transparent max-lg:mt-24 home-card w-full h-full  lg:w-4/5 lg:h-4/5 lg:rounded-2xl shadow-2xl shadow-sky-400 max-lg:border-none'>
    <div>
      <Clock/>
    </div>

    <div className='flex justify-around ml-8 mr-8 text-xl max-sm:flex-col-reverse ' >
    

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