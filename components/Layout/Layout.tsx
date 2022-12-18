import React from 'react'
import Head from 'next/head'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import styles from '../../styles/layout.module.css'
import { ILayout } from './Layout.types'
import { SettingOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd';
import Link from 'next/link'


export default function Layout({ children }: ILayout): JSX.Element {
	const contacts = useSelector((state: any) => state.contacts) // For making smart search in future
	return (
		<>
			<Head>
				<title>PhoneBook</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<div className={classNames(styles.brandName, styles.headerItem)}>
					<Link href={'/'}><h1>PhoneBook</h1></Link>
				</div>
				<div className={styles.headerItem}>
					<input placeholder='search' className={styles.searchField} />
				</div>
				<div className={classNames(styles.settings, styles.headerItem)}>
					<Tooltip title='settings'>
						<Link href={'/settings'}><Button type='primary' icon={<SettingOutlined />} /></Link>
					</Tooltip>
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