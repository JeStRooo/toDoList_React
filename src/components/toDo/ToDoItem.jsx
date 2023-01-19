import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Actions} from "../store/actions/Actions";

import styles from './ToDoItem.module.css';
import trash from '../icons/icons8-мусор.svg';
import edit from '../icons/pencil-icon.svg'
import complete from '../icons/comlite_icon.svg'

const ToDoItem = ({todo, todos}) => {
    const [isEditValue, setIsEditValue] = useState(false)
    const [isDone, setIsDone] = useState(todo.isDone)
    const [value, setValue] = useState(todo.title)

    const dispatch = useDispatch()

    const deleteTodo = (id) => {
        const newListTodo = todos.filter(todo => todo.id !== id)
        dispatch(Actions.deleteTodo(newListTodo))
    }

    const changeTodo = (id) => {
        setIsEditValue(!isEditValue)
        const newChangeTodo = todos.map(todo => todo.id !== id ? todo : {...todo, title: value})
        dispatch((Actions.changeTodo(newChangeTodo)))
    }

    const isDoneTodo = (id) => {
        setIsDone(!isDone)
        const missionCompleted = todos.map(todo => todo.id !== id ? todo : {...todo, isDone: !isDone})
        dispatch(Actions.isDoneTodo(missionCompleted))
    }

    return (
            <div className={styles.todo}
                 style={{
                     background: isDone ? 'rgba(206,248,210,0.81)' : '#f2f2fd',
                     borderImage: isDone ? 'linear-gradient(to right, #08ff00, #00ff65)' : 'linear-gradient(to right, #3ebee5, #4448DA)',
                     borderImageSlice: isDone ? '2' : '1',
                 }}
            >
                <div className={styles.todo__input}>
                    <input className={styles.todo__value}
                           readOnly={!isEditValue}
                           type="text"
                           value={String(value)}
                           onChange={e => setValue(e.target.value)}
                    />
                </div>
                <div className={styles.icons}>
                    <img className={styles.todo__icon}
                         title="Выполнено"
                         onClick={() => isDoneTodo(todo.id)}
                         src={complete}
                         alt="edit"
                    />
                    <img className={styles.todo__icon}
                         title="Изменить"
                         onClick={changeTodo}
                         src={edit}
                         alt="edit"
                    />
                    <img className={styles.todo__icon}
                         title="Удалить"
                         onClick={() => deleteTodo(todo.id)}
                         src={trash}
                         alt="trash"
                    />
                </div>
            </div>
    );
};

export default React.memo(ToDoItem);