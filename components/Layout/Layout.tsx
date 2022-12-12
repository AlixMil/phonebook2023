import React, { ReactNode, useState } from 'react'
import { SettingOutlined } from '@ant-design/icons'
import Icon from '@ant-design/icons/lib/components/Icon'
import Head from 'next/head'
import classNames from 'classnames'

import styles from '../../styles/layout.module.css'
import { IContacts } from '../../types/contactsState'

interface ILayout {
	children: ReactNode
}


export default function Layout({ children }: ILayout): JSX.Element {
	const [contacts, setContacts] = useState<IContacts[]>()

	return (
		<>
			<Head>
				<title>PhoneBook</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<div className={classNames(styles.brandName, styles.headerItem)}>
					<h1>PhoneBook</h1>
				</div>
				<div className={styles.headerItem}>
					<input placeholder='search' className={styles.searchField} />
				</div>
				<div className={classNames(styles.settings, styles.headerItem)}>
					settingIcon
				</div>
			</header>
			<main>
				{children}
			</main>
			<footer className={styles.footer}>
				<h4 className={styles.footerItem}>PhoneBook 2023</h4>
				<h4>GitHub</h4>
				<h4>About Me</h4>
			</footer>
		</>

	)
}

// 