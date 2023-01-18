import React from 'react'

const Todo = ({todo, todoDelete,todoToogleChange}) => {
  
  return (
    
    <div>
      <div className='card mt-2'>
            <div className='card-body'>
                <h3 className='card-title'>
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
                <hr/>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-sm btn-outline-primary mr-2'>Editar</button>

                    <button
                    onClick={()=>todoDelete(todo.id)}
                    className='btn btn-sm btn-outline-danger'>Eliminar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo