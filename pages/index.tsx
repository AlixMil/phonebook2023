import styles from '../styles/home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../redux/contactsSlice'
import ContactViewItem from '../components/ContactViewItem/ContactViewItem'
import { IContact } from '../types/generalTypes'
import { useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { AppDispatch } from '../redux/store'
import { List, Skeleton } from 'antd'
import Link from 'next/link'

export default function Home(): JSX.Element {
  const contacts = useSelector((state: any) => state.contacts)
  useEffect(() => {
    console.log('hello world')
  }, [contacts])

  const dispatch: AppDispatch = useDispatch()

  const handleAddContact = () => dispatch(
    add(
      {
        firstName: 'Anatoly',
        lastName: 'Gudinni',
        phoneNumber: '892926073408',
        description: 'Like Bicecyles',
        age: 26,
        tags: ['warner'],
        id: uuid()
      }
    ))

  const handleRemoveContact = (id: string) => dispatch(
    remove(id)
  )

  return (
    <div className={styles.home}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        setting of tags
        <button onClick={handleAddContact}>Add contact</button>
      </div>
      <div>
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
                {item.firstName}
                {item.age}
                {item.phoneNumber}
              </List.Item>
            )}
          />
        ) : <h1>Contacts does not exists!</h1>}
      </div>
      <div>
        setting of list
      </div>
    </div>
  )
}