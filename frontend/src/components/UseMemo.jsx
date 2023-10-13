import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodo] = useState([]);

  function addTodo() {
    setTodo([...todos, "New Todo"])
  }

  // const lengthycalculation = calculate(counter);

  const lengthycalculation = useMemo(() => calculate(counter), [counter]);

  return (
    <>
      <h2>lengthycalculation - {lengthycalculation}</h2>
      <h2>Counter - {counter}</h2>
      <button onClick={() => setCounter((val) => val + 1)}>+</button>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((item, index) => (
        <div key={index}>{item}</div>
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