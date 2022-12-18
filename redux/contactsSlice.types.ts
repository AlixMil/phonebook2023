export type IChangeAction<T> = {
	[K in keyof T]: {
		value: T[K]
		fieldToChangeName: K
	}
}[keyof T] & { index: number }

export type IAssignTagAction = {
	index: number,
	value: string
}

export type IRemoveTagAction = {
	index: number
	value: string
}