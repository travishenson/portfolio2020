import React, {useState} from 'react';
import emailjs from 'emailjs-com';

import './style.scss';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('Send Message');

  const handleBlur = (e) => {
    let targetTag = e.target.tagName.toLowerCase();
    let targetValue;

    if (targetTag === 'input') {
      targetValue = e.target.getAttribute('value').replace(/\s/g, '');
    } else if (targetTag === 'textarea') {
      targetValue = e.target.innerHTML;
    }

    if (targetValue === '') {
      e.target.classList.add('invalid-input');
    } else {
      e.target.classList.remove('invalid-input');
    }
  }

  const handleClick = (e) => {
    e.target.classList.remove('invalid-input');
  }

  const handleInputChange = (e) => {
    setForm({ 
      ...form, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = () => {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
    } else {
      setStatusMessage('Sending...');

      emailjs.send('gmail', 'portfolio_contact', form, process.env.EMAILJS_ID)
        .then((response) => {
          setStatusMessage('Sent!');
          setForm({
            name: '',
            user_email: '',
            subject: '',
            message: ''
          });
        }, (err) => {
          setStatusMessage('Failed')
        });
    }
  };

  return (
    <div className='contact-form'>
      <form id='contact-form'>
        <h2 className='form-status'></h2>
        <div>
          <label htmlFor='name'>Name*</label>
          <input 
            type='text' id='name' name='name' placeholder='John Smith' required
            pattern='.*\S.*'
            value={form.name}
            onChange={handleInputChange}
            onClick={handleClick}
            onBlur={handleBlur}
          />
          <span>Name is required</span>
        </div>
        <div>
          <label htmlFor='email'>Email*</label>
          <input
            type='email' id='email' name='user_email' placeholder='john@email.com' required
            value={form.user_email}
            onChange={handleInputChange}
            onClick={handleClick}
            onBlur={handleBlur}
          />
          <span>Valid email is required</span>
        </div>
        <div>
          <label htmlFor='subject'>Subject*</label>
          <input 
            type='text' id='subject' name='subject' placeholder='A career opportunity' required
            pattern='.*\S.*'
            value={form.subject}
            onChange={handleInputChange}
            onClick={handleClick}
            onBlur={handleBlur}
          />
          <span>Subject is required</span>
        </div>
        <div>
          <label htmlFor='message'>Message*</label>
          <textarea 
            id='message' name='message' placeholder={'What\'s on your mind?'} required
            value={form.message}
            onChange={handleInputChange}
            onClick={handleClick}
            onBlur={handleBlur}
          />
          <span>A message is required</span>
        </div>
        <div>
          <input type='button' value={statusMessage} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  )
};

export default ContactForm;