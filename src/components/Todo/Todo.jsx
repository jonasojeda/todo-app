import React from 'react'
import { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { ImCheckboxUnchecked } from 'react-icons/im';

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
            <button className='mr-4' onClick={()=>todoToogleChange(todo.id)}>{todo.completed? <AiOutlineCheckSquare/>: <ImCheckboxUnchecked/>}</button>
            <button className='mr-4' onClick={()=>setTodoEdit(todo)} ><BiEdit/></button>
            <button onClick={()=>{todoDelete(todo.id)}}><AiOutlineDelete/></button>
          </div>
        </summary>
        <p class="pt-1 pb-3 px-4 bg-sky-200 rounded-b-lg">{todo.description}</p>
      </details>
    </div>
  
  </>
  )
}

export default Todo
