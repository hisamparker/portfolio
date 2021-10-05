/* eslint-disable consistent-return */
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const isValidEmail = (submittedEmail: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(submittedEmail).toLowerCase());
    // /\S+@\S+\.\S+/ other regex
  };
  const submit = (): void => {
    if (!name || !email || !message) {
      // eslint-disable-next-line no-alert
      return alert('Please fill in all fields.');
    }
    if (!isValidEmail(email)) {
      // eslint-disable-next-line no-alert
      return alert('Please use valid email.');
    }
    if (name && email && message) {
      // TODO - send mail
      // eslint-disable-next-line no-alert
      alert('yay');
      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    }
  };

  return (
    <>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="button" onClick={submit}>Send Message</button>
      {emailSent && (<span>Thank you for your message, we will be in touch in no time!</span>)}
    </>
  );
};

export default ContactForm;
