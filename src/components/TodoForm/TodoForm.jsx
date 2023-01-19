import React, { useState } from 'react'

const initialFormValues={
  title: '',
  description:''
}

const TodoForm = ({todoAdd}) => {
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

    todoAdd(formValues);
    setFormValues(initialFormValues)
    setSuccessMessage('Tarea agregada con exito')
    setTimeout(()=>{
      setSuccessMessage(null)
    },5000)
    setErrors(null)

  }

  // const handleError= ()=>{

  //   const error = []

  //   if(!formValues.title){
  //     error.push({key:0,message:'Ingres el titulo'})
  //   }

  //   if(!formValues.description){
  //     error.push({key:0,message:'Ingres la descripcion'})
  //   }

  //   setErrors(error)
  // }

  
  return (
    <div>
        <h1>Nueva Tarea</h1>
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
          >Agregar tarea
          </button>
        </form>
    </div>
  )
}

export default TodoForm