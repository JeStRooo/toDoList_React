export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const IS_DONE_TODO = 'IS_DONE_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'
export const ADD_API_TODOS = 'ADD_API_TODOS'

export const Actions = {
    addTodo: (payload) => ({
        type: ADD_TODO,
        payload,
    }),
    deleteTodo: (payload) => ({
        type: DELETE_TODO,
        payload
    }),
    changeTodo: (payload) => ({
        type: CHANGE_TODO,
        payload
    }),
    isDoneTodo: (payload) => ({
        type: IS_DONE_TODO,
        payload
    }),
    fetchTodo: () => ({
        type: FETCH_TODOS,
    }),
    addApiTodos: (payload) => ({
        type: ADD_API_TODOS,
        payload
    }),

}