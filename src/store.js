import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './components/redux/reducers'
import reactThunk from 'redux-thunk'

const middlewareEnhacer = applyMiddleware(reactThunk)

const store = createStore(
  rootReducers,
  compose(
    middlewareEnhacer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
