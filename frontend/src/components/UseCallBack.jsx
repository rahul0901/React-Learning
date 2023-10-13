import React, { useCallback, useState } from 'react';
import Todos from './Todos';

const UseCallBack = () => {

    const [counter, setCounter] = useState(0);

    const [todos, setTodos] = useState([]);

    function handleCounter() {
        setCounter((val) => val + 1);
    }

    const addToDos= useCallback(()=> {
        setTodos([...todos, "New Todo"]);
    },[todos])

    return (
        <>
            <h1>Counter - {counter}</h1>
            <button onClick={handleCounter}>+</button>
            <Todos todo={todos} addtodo={addToDos} />
        </>
    )
}

export default UseCallBack;