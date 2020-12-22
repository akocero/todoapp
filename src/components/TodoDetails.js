import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoDetails = ({ todo }) => {
    const { removeTodo, toggleTodo } = useContext(TodoContext);

    const handleToggleTodo = (id, done) => {
        const updatedDone = done ? false : true;
        console.log(id, updatedDone);
        toggleTodo(id, updatedDone);
    }
    return (
        <div>

            <div className={"todo-details is-done-" + todo.isDone} >
                <button onClick={() => handleToggleTodo(todo.id, todo.isDone)} >DONE</button>
                <button onClick={() => removeTodo(todo.id)}>DELETE</button>
                <div className="todo-title">{todo.title}</div>
                <div className="todo-desc">{todo.desc}</div>
            </div >
        </div>

    );
}

export default TodoDetails;