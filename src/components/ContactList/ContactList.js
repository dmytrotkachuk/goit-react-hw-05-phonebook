import React from 'react'
import Contact from '../Contact/Contact'
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition , TransitionGroup} from 'react-transition-group'
import styles from './ContactList.module.css'
import transitions from './transitions.module.css'

const ContactList = ({contacts, onRemove}) => {
    return(
    <TransitionGroup component='ul' className={styles.contactList}>
   
        {contacts.map(contact => 
        
        <CSSTransition 
        classNames={transitions}
        timeout={200}
        key={uuidv4()}> 

        <Contact contact={contact} onRemove={onRemove}/> 

        </CSSTransition>)}


    </TransitionGroup>
    )
}

export default ContactList;