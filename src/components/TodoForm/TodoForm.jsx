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
    <div>
        <h1>{todoEdit?'Editar tarea':'Nueva Tarea'}</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Titulo' 
            className='form-control' 
            value={title}
            name='title'
            onChange={handleInputChange}
          />
          <textarea 
            placeholder='Description' 
            className='form-control mt-2'
            value={description}
            name='description'
            onChange={handleInputChange}
          />
          {errors&&
            <div class="alert alert-danger mt-2" role="alert">
              {errors}
            </div>  
            
          }

          {
            successMessage &&
            <div class="alert alert-success mt-2" role="alert">
            {successMessage}
          </div>  
          }
          <button 
            className='btn btn-primary btn-block mt-2'
          >{todoEdit?'Actualizar tarea':'Agregar tarea'}
          </button>

          {todoEdit &&
            <button
            onClick={()=>{setTodoEdit(null)}} 
            className='btn btn-warning mt-2 btn-block'>
              Cancelar edicion
            </button>
          }
        </form>
    </div>
  )
}

export default TodoForm