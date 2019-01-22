import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './modules'


const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history), promiseMiddleware()]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default () => {
  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )
  return store
}
