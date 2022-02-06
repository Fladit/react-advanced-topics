import React from 'react';
import {TodoItemType} from "../../types/todos/todos";
import TodoItem from "../TodoItem";
import styles from './TodoList.module.scss';

const TodoList = ({todos}: {todos: TodoItemType[]}) => {
    return (
        <div className={styles.root}>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default TodoList;