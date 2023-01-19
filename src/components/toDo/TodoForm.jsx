import React from 'react';
import styles from "./TodoForm.module.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {Actions} from "../store/actions/Actions";


const TodoForm = ({setTitle, title, messageError, todos, addNewTodo, setIsFocus, dispatch, isFocus, isValid}) => {
    return (
        <div className={styles.todos__form}>
            <MyInput
                value={title}
                onBlur={() => setIsFocus(false)}
                name='body'
                onChange={e => setTitle(e.target.value)}
                onFocus={() => setIsFocus(true)}
                type="text"
                placeholder="Задача на сегодня"
            />
            {(!isFocus && !isValid) && <div style={{color: "red"}}>{messageError}</div>}
            <MyButton disabled={!isValid} onClick={() => addNewTodo(todos)}>Добавить задание</MyButton>
            <MyButton onClick={() => dispatch(Actions.fetchTodo())}>Добавить задания с API</MyButton>
        </div>
    );
};

export default React.memo(TodoForm);