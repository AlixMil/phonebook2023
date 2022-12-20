import styles from '../styles/home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../redux/contactsSlice'
import ContactViewItem from '../components/ContactViewItem/ContactViewItem'
import { IContact } from '../types/generalTypes'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { AppDispatch } from '../redux/store'
import { List, Skeleton, Button } from 'antd'
import Link from 'next/link'
import { Avatar } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons'
import ModalAddContactView from '../components/ModalAddContactView/ModalAddContactView'
import { PayloadAction } from '@reduxjs/toolkit'


export default function Home(): JSX.Element {
  const contacts = useSelector((state: any) => state.contacts)
  useEffect(() => {
    console.log('hello world')
  }, [contacts])

  const dispatch: AppDispatch = useDispatch()

  const [isModalAddContactView, setIsModalAddContactView] = useState<boolean>(false)

  const handleModalView = (): void => {
    setIsModalAddContactView((state: boolean) => !state)
  }

  const handleAddContact = (): PayloadAction<IContact> => dispatch(
    add(
      {
        firstName: 'Anatoly',
        lastName: 'Gudinni',
        phoneNumber: '892926073408',
        description: 'Like Bicecyles',
        age: 26,
        tags: ['warner'],
        id: uuid(),
        note: 'asdasdas'
      }
    ))

  const handleRemoveContact = (id: string) => dispatch(
    remove(id)
  )

  return (
    <div className={styles.home}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        setting of tags
        <Button icon={<PlusCircleOutlined />} onClick={handleModalView} />
        <ModalAddContactView open={isModalAddContactView} onOk={handleModalView} onCancel={handleModalView} />
      </div>
      <div className={styles.list}>
        {contacts.length !== 0 ? (
          <List
            itemLayout='horizontal'
            dataSource={contacts}
            bordered
            renderItem={(item: IContact) => (
              <List.Item
                key={item.id}
                actions={[<Link key={`edit ${item.id}`} href={`${item.id}`}>edit</Link>, <a key={`remove ${item.id}`} onClick={() => handleRemoveContact(item.id)}>remove</a>]}
                title={item.firstName}
              >
                <div
                  className={styles.listItem}
                >
                  <Avatar draggable={false} className={styles.listItemElement} />
                  <p className={styles.listItemElement} style={{ paddingLeft: '20px' }}>Name:</p>
                  <p className={styles.listItemElement}>{item.firstName}</p>
                  <p className={styles.listItemElement}>Phone number:</p>
                  <p className={styles.listItemElement}>{item.phoneNumber}</p>
                </div>
              </List.Item>
            )}
          />
        ) : <h1>Contacts does not exists!</h1>}
      </div>
      <div>
        setting of list
      </div>
    </div>)
}