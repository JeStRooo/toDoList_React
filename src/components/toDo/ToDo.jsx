import React, {useEffect, useState} from 'react';
import {Actions} from "../store/actions/Actions";
import {useDispatch, useSelector} from "react-redux";
import TodoForm from "./TodoForm";

import styles from "./ToDo.module.css"
import TodoList from "./TodoList";

const ToDo = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)

    const [title, setTitle] = useState('')
    const [isFocus, setIsFocus] = useState(true)
    const [isValid, setIsValid] = useState(false)

    const messageError = 'Поле не должно быть пустым!'

    useEffect(() => {
        setIsValid(!!title.length)
    }, [title])

    const addNewTodo = () => {
        const todo = {
            id: Date.now(),
            title,
            isDone: false
        }
        setTitle('')
        setIsFocus(true)
        setIsValid(false)
        dispatch(Actions.addTodo(todo))
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.title}>todos</div>
            <div className={styles.todos}>
                <TodoForm
                    todos={todos}
                    dispatch={dispatch}
                    title={title}
                    setTitle={setTitle}
                    isFocus={isFocus}
                    isValid={isValid}
                    setIsFocus={setIsFocus}
                    setIsValid={setIsValid}
                    addNewTodo={addNewTodo}
                    messageError={messageError}
                />
                <TodoList
                    todos={todos}
                />
            </div>
        </section>
    );
};

export default ToDo;