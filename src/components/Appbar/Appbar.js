import React from 'react'
import styles from './Appbar.module.css'
import { CSSTransition} from 'react-transition-group'
import transitions from './transitions.module.css'
// import Notification from '../Notification/Notification'

const Appbar = () => (
    <header className={styles.header}>
    <CSSTransition in={true} appear={true} classNames={transitions} timeout={500} >
    <h1 className={styles.title}>Phonebook</h1>
    </CSSTransition>
    </header>
)

export default Appbar;