import React from 'react'

const TodoList = () => {
  return (
    <div>
        <h1>TodoList</h1>
        <div className='card'>
            <div className='card-body'>
                <h3 className='card-title'>
                    titulo Tarea
                    <button className='btn btn-sm btn-outline-success'>Terminar</button>
                </h3>
                <p className='card-text'>
                    descripcion tarea
                </p>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-sm btn-outline-primary mr-2'>Editar</button>
                    <button className='btn btn-sm btn-outline-danger'>Eliminar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList