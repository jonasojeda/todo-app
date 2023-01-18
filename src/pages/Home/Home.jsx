import React from 'react'
import TodoForm from '../../components/TodoForm/TodoForm'
import TodoList from '../../components/TodoList/TodoList'

function Home() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col8'>
          <TodoList/>
        </div>
        <div className='col-4'>
          <TodoForm/>
        </div>
      </div>
    </div>
  )
}

export default Home