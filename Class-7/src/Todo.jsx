import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [addTodo, setAddTodo] = useState('')
    const addingTodo = () => {
        setTodos([...todos, addTodo])
        setAddTodo('')
    }
    return (
        <>
            <input value={addTodo} onChange={(e) => setAddTodo(e.target.value)} placeholder='Enter a todo' type="text" />
            <button onClick={addingTodo}>Add Todo</button>
            <ul>
                {todos.map((e, i) => {
                    return <li key={i}>{e}</li>
                })}
            </ul>
        </>
    )
}

export default Todo
