import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import shortid from 'shortid';

const App = () => {
    const [todos, setTodos] = useState ([
        {
            content: '課題をする'
        },
        {
            content: '洗濯をする'
        },
        {
            content: '電話をする'
        },
        {
            content: '料理をする'
        }
    ])

    const addTodo = content => {
        setTodos([
            ...todos,
            {
                content,
                id: shortid.generate()
            }
        ])
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo}/>
        </>
    )
}

export default App