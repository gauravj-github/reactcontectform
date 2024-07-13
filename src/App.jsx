import React from 'react'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Button from './components/Button/Button'
import ContactForm from './components/ContactForm/ContactForm'



const App = () => {
  return (
    <div>
      <Navigation/>
     <main className='main_container'>
     <ContactHeader/>
      <ContactForm/>
     </main>
    </div>
  )
}

export default App