import React, { memo } from 'react';

const Todos = (props) => {

    const { todo, addtodo } = props;

    alert('from todos component')

    
  return (
    <>
        <div>Todos</div>
        <button onClick={addtodo}>Add Todo</button>
        {todo.map((item, index)=>(
            <h1 key={index}>{item}</h1>
        ))}
    </>
  )
}

export default memo(Todos)