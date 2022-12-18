import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice'

export const store = configureStore({
	reducer: {
		contacts: contactsReducer
	}
})

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch