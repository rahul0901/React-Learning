import React, { useState } from 'react';
import './Todo.css';
// import styled from 'styled-components';

const Todo = () => {

    // ye todo mai bss form se data lenge store krne apne pss..
    const [todo, setTodo] = useState({getTodo:''});

    console.log(todo);

    //ye wale mai joh usme joh second todo apan daalenge usme phele wale ko as it is store krke uske baad hi print knre ki liye means cache krega apna saara todo ko ek saath show krne ki liye..

    const [newTodo, setNewTodo] = useState([]);

    const handleChange = ( event ) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const getData = (event) => {
        event.preventDefault();
        if(todo.getTodo){
            const finalTodo = {
                finalGetTodo: todo.getTodo
            }

            // alert(newTodo)

            setNewTodo([...newTodo, finalTodo]);
            // alert(newTodo , '2nd time')


            setTodo({getTodo:''});
        }
        else{
            alert('Please add your todo..')
        }
    }

    // const [deleting, setDeleting] = useState(false);

    const handleDelete = (index) =>{
        const updatedTodo = [...newTodo];
        updatedTodo.splice(index, 1);
        setNewTodo(updatedTodo);
    }

    // const css = deleteButton ? 'show' : 'hidden';

    // const P = styled.p`
    //     display: none;
    // `;

  return (
    <div className="screen-todo">
        <form onSubmit={getData}>
            <input type="text" name="getTodo" id="" onChange={handleChange} value={todo.getTodo} />
            <input type="submit" value="Add Todo" />
        </form>

        <p>{newTodo.map((item, index)=>(
            <p key={index}>
                <p>{item.finalGetTodo}</p>
                <button onClick={()=>handleDelete(index)} >delete this one..</button>
                {/* <button onClick={()=>P}>delete this one..</button> */}
                {/* <button className='css' onClick={()=>!css}>delete this one..</button> */}
            </p>
        ))}</p>
    </div>
  )
}

export default Todo