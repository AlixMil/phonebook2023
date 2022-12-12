import React from 'react'
import { IContacts } from '../../types/contactsState'
import styles from './ContactViewItem.module.css'

function ContactViewItem({ firstName, lastName, regionCode, phoneNumber, description, age, tags }: IContacts): JSX.Element {
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
				{regionCode}
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
		</div>
	)
}

export default ContactViewItem