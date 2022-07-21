import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import asyncSessionStorage from 'redux-persist/lib/storage'
import changeSideBar from 'store/slices/changeSideBar'
import changeTheme from 'store/slices/changeTheme'
import { RootState } from 'store/StateTypes'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const reducer = combineReducers({ changeSideBar, changeTheme })

const persistConfig = {
  key: 'root',
  storage: asyncSessionStorage,
  whitelist: ['changeSideBar', 'changeTheme']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
  devTools: process.env.NODE_ENV === 'development'
})

export const persistor = persistStore(store)
