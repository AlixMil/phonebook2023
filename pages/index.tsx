import styles from '../styles/home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../redux/contactsSlice'
import ContactViewItem from '../components/ContactViewItem/ContactViewItem'
import { IContact } from '../types/generalTypes'
import { useCallback, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { AppDispatch } from '../redux/store'

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

  return (
    <div className={styles.home}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        setting of tags
        <button onClick={handleAddContact}>Add contact</button>
      </div>
      <div>
        {contacts.length !== 0 ? contacts.map((el: IContact) => (
          <ContactViewItem
            firstName={el.firstName}
            lastName={el.lastName}
            phoneNumber={el.phoneNumber}
            description={el.description}
            age={el.age}
            tags={el.tags}
            key={el.id}
            id={el.id}
          />
        )) : <h1>Contacts does not exists!</h1>}
      </div>
      <div>
        setting of list
      </div>
    </div>
  )
}
