import React from 'react'
import { memo } from 'react';

const Todo = (props) => {

    const { todo, addtodo } = props;

    alert('todo ka elaka se')

  return (
    <>
        <h2>Todo</h2>
        <button onClick={addtodo}>Add Todo</button>
        {todo.map((item)=>(
            <p>{item}</p>
        ))}
    </>
  )
}

export default memo(Todo);