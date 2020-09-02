import React from 'react'
import styles from './Contact.module.css'
import PropTypes from 'prop-types';

const Contact = ({contact,onRemove}) => {

    return(
    <li className={styles.contact}>
    <p className={styles.contactData}>{contact.name}</p>
    <p className={styles.contactData}>{contact.number}</p>
    <button 
    className={styles.button} 
    onClick={() => onRemove(contact.id)}
    >X</button>
    </li>
    
    )}

export default Contact;


Contact.propTypes = {
    contact: PropTypes.shape(PropTypes.string.isRequired) ,
    onRemove: PropTypes.func
}