import styles from '../styles/home.module.css'

export default function Home({ contacts = [] }): JSX.Element {
  return (
    <div className={styles.home}>
      <div>
        setting of tags
      </div>
      <div>
        {contacts.length ? contacts.map(el => (
          <ContactViewItem
            firstName={el.firstName}
            lastName={el.lastName}
            phoneNumber={el.phoneNumber}
            description={el.description}
            age={el.age}
            tags={el.tags}
            key={el.id}
          />
        )) : <h1>Contacts does not exists!</h1>}
      </div>
      <div>
        setting of list
      </div>
    </div>
  )
}
