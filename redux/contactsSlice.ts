import { IContact } from './../types/generalTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStore } from './store';
import { isArray } from 'util';

const initialState: IContact[] = [
	{ firstName: 'Andrey', lastName: 'Feramonov', phoneNumber: '89771337004', description: 'Like bikes', age: 22, tags: ['helper'], id: '1' }
]

type IChangeAction<T> = {
	[K in keyof T]: {
		value: T[K]
		fieldToChangeName: K
	}
}[keyof T] & { index: number }

type IAssignTagAction = {
	index: number,
	value: string
}

type IRemoveTagAction = {
	index: number
	value: string
}

export const contactsSlice = createSlice({
	name: "contacts",
	initialState: initialState,
	reducers: {
		add: (state, action: PayloadAction<IContact>) => {
			state.push(action.payload)
		},
		remove: (state, action: PayloadAction<string>) => {
			return state.filter((el: IContact) => el.id !== action.payload)
		},
		change: (state, action: PayloadAction<IChangeAction<IContact>>) => {
			const { fieldToChangeName, index, value } = action.payload
			if (state[index]) state[index] = { ...state[index], [fieldToChangeName]: value }
		},
		assignTag: (state, action: PayloadAction<IAssignTagAction>) => {
			const { index, value } = action.payload
			if (state[index]) {
				state[index] = { ...state[index], tags: state[index].tags?.concat(value) }
			}
		},
		removeTag: (state, action: PayloadAction<IRemoveTagAction>) => {
			const { index, value } = action.payload
			const changedTags = state[index].tags?.filter((el: string) => el !== value)
			if (state[index]) state[index] = { ...state[index], tags: changedTags }
		}
	},
})

export const { add, remove, change, assignTag, removeTag } = contactsSlice.actions

export const selectContacts = (state: RootStore) => state.contacts

export default contactsSlice.reducer;