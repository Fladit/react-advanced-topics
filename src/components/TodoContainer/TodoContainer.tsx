import React, {useState} from 'react';
import {Button} from "@mui/material";
import TodoList from "../TodoList";
import {todos} from '../../utils/todos';
import styles from './TodoContainer.module.scss';

const TodoContainer = () => {
    const [isTodosVisible, setIsTodosVisible] = useState(false);
    const buttonText = !isTodosVisible? 'Открыть список дел': 'Закрыть список дел';

    return (
        <div className={styles.root}>
            <Button onClick={() => {setIsTodosVisible((isVisible => !isVisible));}}>{buttonText}</Button>
            {isTodosVisible && <TodoList todos={todos}/>}
        </div>
    );
};

export default TodoContainer;