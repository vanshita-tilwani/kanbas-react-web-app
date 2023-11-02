import React, { useState } from 'react';
function TodoList() {
    const [todos, setTodos] = useState([
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node" },
    ])
    const [todo, setTodo] = useState({ title: "Learn MongoDB" })
    const addTodo = (todo) => {
        const newTodos = [...todos, { ...todo, id: Date().getTime().toString() }]
        setTodos(newTodos)
        setTodo({ title: "" })
    }
    const deleteToto = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }
    const updateTodo = (todo) => {
        const newTodos = todos.map((item) => (item.id === todo.id ? todo : item))
        setTodos(newTodos)
        setTodo({ title: "" })
    }
    return (
        <div>
            <h2>Todo List</h2>
            <ul className='list-group'>
                <input value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} className='form-control' />
                <li className='list-group-item'>
                    <button onClick={() => updateTodo(todo)} className='btn btn-warning'>Update</button>
                    <button onClick={() => addTodo(todo)} className='btn btn-success'>Add</button>
                </li>
                {todos.map((todo) => (
                    <li key={todo.id} className='list-group-item'>
                        {todo.title}
                        <button onClick={() => setTodo(todo)} className='btn btn-primary'>Edit</button>
                        <button onClick={() => deleteToto(todo.id)} className='btn btn-danger'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;