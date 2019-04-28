// Import Middleware e Redux
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Import InitialState
import { initialState } from './store';

// Import Tipos de Actions
import { actionTypes } from './actions';

// Reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY:
      return Object.assign({}, state, {
        categoryActive: action.category,
      })
    default:
      return state
  }
}

// Inicializa a Store
export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}