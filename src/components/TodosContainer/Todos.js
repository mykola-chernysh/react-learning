import React, {useEffect, useState} from 'react';

import {todoService} from "../../services/todoService";
import {Todo} from "./Todo";
import styles from './Todos.module.css';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll().then(({data}) => setTodos(data));
    }, []);

    return (
        <div className={styles.Todos}>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export {Todos};