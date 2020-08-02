import { Action, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import logger from 'redux-logger'
import { ThunkAction } from "redux-thunk"
import rootReducer, { RootState } from "./rootReducer"

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== "production",
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export default store
