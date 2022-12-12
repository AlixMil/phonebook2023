import { createSlice } from '@reduxjs/toolkit';

export const constactsSlice = createSlice({
	name: "contacts",
	initialState: [
		{ firstName: 'Andrey', lastName: 'Feramonov', phoneNumber: '89771337004', description: 'Like bikes', age: 22, tags: ['helper'], id: 1 }
	],
	reducers: {
		add: (state, action) => {
			state.push(action.payload)
		},
		remove: (state, action) => {
			state = state.filter(el => el.id !== action.payload.idForRemove)
		},
		change: (state, action) => {
			state[action.payload.index][action.payload.fieldToChangeName] = action.payload.value
		},
		assignTag: (state, action) => {
			state[action.payload.index].tags.push(action.payload.newTag)
		},
		removeTag: (state, action) => {
			state[action.payload.index].tags = state[action.payload.index].tags.filter(el => el !== action.payload.tagToRemove)
		}
	}
})

export const { add, remove, change, assignTag, removeTag } = constactsSlice.actions

export const selectContacts = (state: any) => state.contacts

export default constactsSlice.reducer;