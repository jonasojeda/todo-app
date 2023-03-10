import React, { useEffect, useState } from 'react'

const initialFormValues={
  title: '',
  description:''
}

const TodoForm = ({todoAdd,todoEdit,todoUpdate,setTodoEdit}) => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const {title, description}= formValues
  const [errors, setErrors]= useState(null)
  const [successMessage, setSuccessMessage ] = useState(null)
  const handleInputChange = (e)=>{

    const changedFormValue = {
      ...formValues,
      [e.target.name]:e.target.value
    }

    setFormValues(changedFormValue)
  }

  useEffect(()=>{
    if(todoEdit){
      setFormValues(todoEdit)
    }else{
      setFormValues(initialFormValues)
    }
    
  },[todoEdit])

  const handleSubmit = (e)=>{
    e.preventDefault(); // Evita que recargue la pagina

    //Agregar tarea
    if(title.trim() === ''){
      setErrors('You must indicate a title.')
      return ;
    }

    if(description.trim() === ''){
      setErrors('You must provide a description.')
      return ;
    }

    if(todoEdit){
      //Actualizar Todo
      todoUpdate(formValues)
      setSuccessMessage('Task updated successfully.')
    }else{
      todoAdd(formValues);
      setSuccessMessage('Task added successfully.')
      setFormValues(initialFormValues)
      
    }

    
    
    
    setTimeout(()=>{
      setSuccessMessage(null)
    },5000)
    setErrors(null)

  }

  
  return (
    <div className='w-1/3 max-sm:w-full'>
        <h1 className='mb-3'>{todoEdit?'Edit Task':'New Task'}</h1>
        <form onSubmit={handleSubmit} className='flex flex-col '>
          <input 
            className='bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="text" 
            placeholder='Title' 
            value={title}
            name='title'
            onChange={handleInputChange}
          />
          <textarea 
            placeholder='Description' 
            className='mt-3 resize-none h-36 bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
            value={description}
            name='description'
            onChange={handleInputChange}
          />
          {errors&&
            <div class="mt-2 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert" >
              {errors}
            </div>  
            
          }

          {
            successMessage &&
            <div  class=" mt-2 bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert" >
            {successMessage}
          </div>  
          }
          <button class="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           
          >{todoEdit?'Update Task':'Add Task'}
          </button>

          {todoEdit &&
            <button
            class="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={()=>{setTodoEdit(null)}} 
            >
              Cancel Edit
            </button>
          }
        </form>
    </div>
  )
}

export default TodoForm