import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetails from '../components/TodoDetails';

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    return todos.length ? (
        <div className="todo-list">
            {todos.map(todo => {
                return (<TodoDetails todo={todo} key={todo.id} />)
            })}
        </div>
    ) : (
            <div className="todo-list-empty">No Todo Please Create one</div>
        )
}

export default TodoList;