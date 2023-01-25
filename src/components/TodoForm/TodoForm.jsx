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
      setErrors('Debes indicar un titulo')
      return ;
    }

    if(description.trim() === ''){
      setErrors('Debes indicar una descripcion')
      return ;
    }

    if(todoEdit){
      //Actualizar Todo
      todoUpdate(formValues)
      setSuccessMessage('Tarea actualizada con exito')
    }else{
      todoAdd(formValues);
      setSuccessMessage('Tarea agregada con exito')
      setFormValues(initialFormValues)
      
    }

    
    
    
    setTimeout(()=>{
      setSuccessMessage(null)
    },5000)
    setErrors(null)

  }

  
  return (
    <div className='w-1/3'>
        <h1>{todoEdit?'Editar tarea':'Nueva Tarea'}</h1>
        <form onSubmit={handleSubmit} className='flex flex-col '>
          <input 
            type="text" 
            placeholder='Titulo' 
            value={title}
            name='title'
            onChange={handleInputChange}
          />
          <textarea 
            placeholder='Description' 
            
            value={description}
            name='description'
            onChange={handleInputChange}
          />
          {errors&&
            <div  role="alert">
              {errors}
            </div>  
            
          }

          {
            successMessage &&
            <div >
            {successMessage}
          </div>  
          }
          <button 
           
          >{todoEdit?'Actualizar tarea':'Agregar tarea'}
          </button>

          {todoEdit &&
            <button
            onClick={()=>{setTodoEdit(null)}} 
            >
              Cancelar edicion
            </button>
          }
        </form>
    </div>
  )
}

export default TodoForm