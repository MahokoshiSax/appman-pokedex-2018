import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
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

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./modules', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}
