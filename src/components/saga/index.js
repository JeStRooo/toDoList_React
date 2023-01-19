import {todosWatcher} from './todoSaga'

export default function* rootSaga() {
    yield todosWatcher()
}