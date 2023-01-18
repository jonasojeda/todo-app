import React, { useState } from 'react'

const initialFormValues={
  title: '',
  description:''
}

const TodoForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const {title, description}= formValues

  const handleInputChange = (e)=>{

    const changedFormValue = {
      ...formValues,
      [e.target.name]:e.target.value
    }

    setFormValues(changedFormValue)
  }

  
  return (
    <div>
        <h1>Nueva Tarea</h1>
        <form>
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
          <button 
            className='btn btn-primary btn-block mt-2'
          >Agregar tarea
          </button>
        </form>
    </div>
  )
}

export default TodoForm