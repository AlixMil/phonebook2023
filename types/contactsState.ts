// export interface IContactTags {
// 	work: boolean
// 	friend: boolean
// 	family: boolean
// }


export interface IContacts {
	firstName: string
	lastName?: string
	phoneNumber: string
	description?: string
	age?: number
	tags?: string[]
	id: number
}