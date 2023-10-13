import { useState} from "react";
import Todo from "./Todo";
import { useCallback } from "react";

function UseCallback() {

    const [count, setCount] = useState(0);

    const [todo, setTodo] = useState([]);

    function handleCount() {
        setCount((val) => val + 1);
    }

    const addToDo = useCallback(() => {
        setTodo([...todo, 'NewTodo'])
    }, [todo]);

    return (
        <>
            <div>UseCallback</div>
            <h2>Counter - {count}</h2>
            <button onClick={handleCount}>+</button>
            <Todo todo={todo} addtodo={addToDo} />
        </>
    )
}

export default UseCallback;