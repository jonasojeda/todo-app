import React from 'react'
import { useState } from 'react'

const Todo = ({todo, todoDelete,todoToogleChange,setTodoEdit}) => {
  const [accordion, setAccordion] = useState(false)
  
  return (
    
    <>
  
    <div class="bg-white w-full sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200">
      <details>
        <summary class="question py-3 px-4 cursor-pointer select-none w-full outline-none flex">
          <div onClick={()=>setAccordion(!accordion)}>{accordion ? '-':'+' }</div>
          <p>{todo.title}</p>
          <button onClick={()=>{todoDelete(todo.id)}}>el</button>
        </summary>
        <p class="pt-1 pb-3 px-4">{todo.description}</p>
      </details>
    </div>
  
  </>
  )
}

export default Todo

{/* <div>
            <div>
                <h3>
                    {todo.title}
                    <button
                      onClick={()=>todoToogleChange(todo.id)}
                      className= {todo.completed? 'btn btn-sm btn-success ml-2':'btn btn-sm btn-outline-success ml-2'} >
                        {todo.completed?'Terminado': 'Terminar' }
                      </button>
                </h3>
                <p className='card-text'>
                    {todo.description}
                </p>
                
                <div className='d-flex justify-content-end'>
                    <button
                    onClick={()=>setTodoEdit(todo)} 
                    className='btn btn-sm btn-outline-primary mr-2'>Editar</button>

                    <button
                    onClick={()=>todoDelete(todo.id)}
                    className='btn btn-sm btn-outline-danger'>Eliminar</button>
                </div>
            </div>
        </div> */}