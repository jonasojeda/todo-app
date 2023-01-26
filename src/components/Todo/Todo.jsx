import React from 'react'
import { useState } from 'react'

const Todo = ({todo, todoDelete,todoToogleChange,setTodoEdit}) => {
  const [accordion, setAccordion] = useState(false)
  
  return (
    
    <>
  
    <div class="bg-white w-full border border-gray-200 divide-y divide-gray-200 mt-2 shadow-xl sm:w-full">
      <details >
        <summary  onClick={()=>setAccordion(!accordion)} class="question py-3 px-4 cursor-pointer select-none outline-none flex justify-between bg-sky-400 rounded-t-lg">
          <div>
            {/* <div className='mr-1' >{accordion ? '-':'+' }</div> */}
            <p className={todo.completed?'line-through':''}>{todo.title}</p>
          </div>

          <div className='flex justify-between'>
            <button onClick={()=>todoToogleChange(todo.id)}>ter-</button>
            <button onClick={()=>setTodoEdit(todo)} >edi-</button>
            <button onClick={()=>{todoDelete(todo.id)}}>eli-</button>
          </div>
        </summary>
        <p class="pt-1 pb-3 px-4 bg-sky-200 rounded-b-lg">{todo.description}</p>
      </details>
    </div>
  
  </>
  )
}

export default Todo
