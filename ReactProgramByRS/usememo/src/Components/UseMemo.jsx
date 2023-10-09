import { useMemo, useState } from "react";

const UseMemo = () => {

    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([]);

    const addToDo = () => {
        setTodos([...todos, "New ToDo"])
    }

    // const lengthyCalculation = calculate(counter);

    const lengthyCalculation = useMemo(()=>calculate(counter),[counter])
    return (
        <>
            <div>UseMemo</div>
            <h4>lengthyCalculation - {lengthyCalculation}</h4>
            <h4>Counter - {counter}</h4>
            <button onClick={() => setCounter((val) => val + 1)}>+</button>
            <button onClick={addToDo}>Add Todo</button>
            {todos.map((todo) => (
                <span><br />{todo}</span>
            ))}
        </>
    )
}


const calculate = (counter) => {
    for (let i = 0; i < 1000000000; i++) {
        counter += 1;
    }

    return counter;
}

export default UseMemo;