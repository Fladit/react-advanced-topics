import React from 'react';
import styles from './TodoItem.module.scss';
import {TodoItemType} from '../../types/todos/todos';
import {CardActions, Card, CardContent, CardMedia, Typography} from "@mui/material";

const TodoItem = ({todo: {albumId, id, title, url, thumbnailUrl}}: {todo: TodoItemType}) => {
    return (
        <Card className={styles.root}>
            <CardMedia component="img" image={url} height="140" alt={title}/>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
            </CardContent>
            <CardActions className={styles.cardActions}>
                <Typography variant="body2" color="text.secondary" className={styles.cardChild}>#{id}</Typography>
            </CardActions>
        </Card>
    );
};

export default TodoItem;