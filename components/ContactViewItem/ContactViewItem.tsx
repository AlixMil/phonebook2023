import React from 'react'
import { IContact } from '../../types/generalTypes'
import styles from './ContactViewItem.module.css'
import { remove } from '../../redux/contactsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/store'

function ContactViewItem({ firstName, lastName, phoneNumber, description, age, tags, id }: IContact): JSX.Element {
	const dispatch: AppDispatch = useDispatch()

	const handleRemoveContact = () => {
		dispatch(remove(id))
	}
	return (
		<div className={styles.container}>
			<div>
				ContactViewItem
			</div>
			<div>
				{firstName}
			</div>
			<div>
				{lastName}
			</div>
			<div>
				{phoneNumber}
			</div>
			<div>
				{description}
			</div>
			<div>
				{age}
			</div>
			<div>
				{tags}
			</div>
			<button onClick={handleRemoveContact}>Remove</button>
		</div>
	)
}

export default ContactViewItem