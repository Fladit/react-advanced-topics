import React, {useState} from 'react';
import {Button} from "@mui/material";
import TodoList from "../TodoList";
import {todos} from '../../utils/todos';
import styles from './TodoContainer.module.scss';
import classNames from "classnames";

const TodoContainer = ({className}: {className?: string;}) => {
    const [isTodosVisible, setIsTodosVisible] = useState(false);
    const buttonText = !isTodosVisible? 'Открыть список дел': 'Закрыть список дел';

    return (
        <div className={classNames(styles.root, className)}>
            <Button onClick={() => {setIsTodosVisible((isVisible => !isVisible));}}>{buttonText}</Button>
            {isTodosVisible && <TodoList todos={todos}/>}
        </div>
    );
};

export default TodoContainer;