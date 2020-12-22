import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        console.log(title, desc);

        addTodo(title, desc);
        setTitle('');
        setDesc('');
    }
    return (
        <form className="form-add-todo" onSubmit={(e) => handleClick(e)}>
            <input className="input-todo-title" type="text" value={title} placeholder="Todo title" onChange={(e) => setTitle(e.target.value)} required />
            <input className="input-todo-desc" type="text" value={desc} placeholder="Todo Description" onChange={(e) => setDesc(e.target.value)} required />
            <input className="btn-add-todo" type="submit" value="Add Todo" />
        </form >
    );
}

export default TodoForm;
