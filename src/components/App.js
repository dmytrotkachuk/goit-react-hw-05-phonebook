import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {CSSTransition} from 'react-transition-group'
//import PropTypes from 'prop-types'; 
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import Appbar from './Appbar/Appbar'
import Notification from './Notification/Notification'
import './App.css'
import notifyTransitions from './transitions.module.css'



class App extends Component{

  state={
    contacts:[
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'',
    notification: false

  }

  componentDidMount(){
    const persistedContacts = localStorage.getItem('contacts')
    if(persistedContacts){
      this.setState({contacts: JSON.parse(persistedContacts)})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.contacts !== this.state.contacts){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
  }

  addContact = ({name,number}) => {
    const statement = this.state.contacts.find(contact => contact.name===name);

    if(statement){
      return this.setState({notification:true})
    }
    

    if(name && number){
      const contact ={
        id: uuidv4(),
        name: name,
        number: number
      }
      this.setState(prevState => ({contacts: [...prevState.contacts, contact],notification:false}))
    }
  }

  isAlready = ()=>{
    this.setState({notification:false})
  }
  removeContact = contactId =>{
    console.log(contactId)
    this.setState(prevState => ({contacts: prevState.contacts.filter(({id})=> id!==contactId)}))
  }

  changeFilter = filter =>{
    this.setState({filter})
  }

  getVisibleContact = () =>{
    const {contacts, filter} = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  }

  render(){
    const {filter,notification} = this.state
    const visibleContacts = this.getVisibleContact()
    return(
      <div className='wrapper'>
      <Appbar/>
      <CSSTransition in={notification}  classNames={notifyTransitions} timeout={250} unmountOnExit>
      <Notification isAlready={this.isAlready}/>
      </CSSTransition>
      <ContactForm onAddContact={this.addContact}/>
      <Filter value={filter} onChangeFilter={this.changeFilter}/>
      <ContactList contacts={visibleContacts} onRemove={this.removeContact}/>
      </div>
    )
  }
}



export default App;
