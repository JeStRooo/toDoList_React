import {createStore, combineReducers} from "redux";
import {todosReducer} from "./reducers/todosReducer";
import {applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"
import saga from "../saga"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    todos: todosReducer,
})

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

export const store = createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware))

store.subscribe(() => { // Вызываем функцию, после каждого обновления Стора
    localStorage.setItem('reduxState', JSON.stringify(store.getState())) // Записываем в Локальное Хранилище,
    // наше текущее состояние приложения
})

sagaMiddleware.run(saga)