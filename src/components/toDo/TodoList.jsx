import React from 'react';
import styles from "./ToDo.module.css";
import ToDoItem from "./ToDoItem";

const TodoList = ({todos}) => {
    return (
        <div className={styles.todos__content}>
            {todos?.length ?
                <div className={styles.todos__item}>
                    {todos.map(todo =>
                        <ToDoItem
                            todos={todos}
                            todo={todo}
                            isDone={todo.isDone}
                            key={todo.id}
                        />
                    )}
                </div>
                :
                <div style={{fontSize: '2rem', marginTop: 20, textAlign: 'center'}}>
                    Список задач отсутствует!
                </div>
            }
        </div>
    );
};

export default TodoList;