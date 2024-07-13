import React, { useState } from 'react'
import styles from './Contact.module.css'
import Button from '../Button/Button'



const ContactForm = () => {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [text,settext]=useState("")

  const onsubmit =(event)=>{
    event.preventDefault();
    setname(event.target[0].value)
    setemail(event.target[1].value)
    settext(event.target[2].value)



  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_button}>
            <Button text="VIA SUPPORT CHAT" />
            <Button text="VIA CALL" />
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM"  />
<form onSubmit={onsubmit}>
    <div className={styles.form_control}>
    <label htmlFor="name">Name</label>
    <input type="text" />
    </div>
    <div className={styles.form_control}>
    <label htmlFor="name">Email</label>
    <input type="text" />
    </div>
    <div className={styles.form_control}>
    <label htmlFor="name">Text</label>
    <textarea name='text' rows="8" />
    </div>
    <div className={styles.button}>
    <Button text="SUBMIT BUTTON"   />

    </div>
</form>
        </div>
        <div className={styles.contactImage}>
            <img src="/images/contact.svg" alt="error" />
        </div>
        <div>
          {name +""+ email +""+ text}
        </div>
    </section>
  )
}

export default ContactForm