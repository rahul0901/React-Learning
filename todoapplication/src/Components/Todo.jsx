import { useState } from "react";
// import axios from 'axios';

function Todo() {

    const [todo, setTodo] = useState({ data: '' })
    // console.log(todo)

    const handlechange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value })
    }

    const getData = (event) => {
        event.preventDefault()
        if (todo.data.length >= 1) {
            alert('todo added')
            console.log(todo)
        }
        else {
            alert('todo cannot be empty')
        }
    }

    return (
        <>
            <div>Todo</div>
            <form onSubmit={getData}>
                <input type="text" placeholder="Add todo here" onChange={handlechange} name="data" /> <br />
                <input type="submit" value="Submit" />
                {/* <p>{todo.map((item) => (<p>{item}</p>))}</p> */}
            </form>
            {todo?.length? <p>{todo.map((item, index) => (
                <p key={index}>
                    {item}
                </p>
            ))}</p> : <p>Fetching</p>}
        </>
    )
}

export default Todo;