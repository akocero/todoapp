import React, { createContext, useState, useEffect } from 'react';
import { v1 as uuid } from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState([
        { title: "Maligo", desc: "Tatlong Tabo lng", isDone: false, id: uuid() },
        { title: "Magbihis", desc: "Kahit butas butas", isDone: false, id: uuid() }
    ]);

    const addTodo = (title, desc) => {
        setTodos([...todos, { title: title, desc: desc, id: uuid() }]);
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(book => book.id !== id));
    }

    const toggleTodo = (id, done) => {
        const modTodos = todos.map(todo => {
            if (todo.id === id) {
                const updatedTodo = {
                    title: todo.title,
                    desc: todo.desc,
                    isDone: done,
                    id: todo.id
                };
                return updatedTodo;
            } else {
                return todo;
            }
        });
        setTodos(modTodos);
    }
    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
            {props.children}
        </TodoContext.Provider>

    )
}


export default TodoContextProvider;