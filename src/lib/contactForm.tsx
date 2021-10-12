/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
// import Notification from './Notification';

const Form = styled.form`
  background: white;
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 50px;
`;

const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;
const TextArea = styled.textarea`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;

const Label = styled.label`
  color: #3d3d3d;
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const NotificationText = styled.p`
  color: red;
  font-family: sans-serif;
  font-size: 12px;
  height: 30px;
`;

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  // const [error, setError] = useState(false);
  const [notificatioMessage, setNotificatioMessage] = useState({ type: '', text: '' });
  const [isValidEmail, setIsValidEmail] = useState('');
  const [isNameFilledIn, setIsNameFilledIn] = useState('');
  const [isMessageFilledIn, setIsMessageFilledIn] = useState('');

  const checkIsValidEmail = (submittedEmail: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(submittedEmail).toLowerCase());
    // /\S+@\S+\.\S+/ other regex
  };

  const handleSubmit = (e: { preventDefault: () => void; }): void => {
    e.preventDefault();
    if (!name || !email || !message) {
      setIsNameFilledIn('false');
    } else if (!checkIsValidEmail(email)) {
      setIsValidEmail('false');
    } else if (name && email && message) {
      const serviceId = 'service_8zeycgu';
      const templateId = 'contact_form';
      const userId = process.env.REACT_APP_NOT_SECRET_USER_ID;
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log(response);
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
          setNotificatioMessage({ type: 'success', text: 'Please fill in all fields.' });
        })
        .then((error) => {
          console.log(error);
          setNotificatioMessage({ type: 'error', text: 'Something went wrong. Please check all fields and try again.' });
        });
    }
  };

  const handleCloseNotification = (): void => {
    setNotificatioMessage({ type: ' ', text: ' ' });
    setEmailSent(false);
  };

  const handleEmailOnChange = (e: { target: { value: React.SetStateAction<string>; }; }): void => {
    setEmail(e.target.value);
    if (checkIsValidEmail(email)) {
      setIsValidEmail('true');
    } else if (!checkIsValidEmail(email)) {
      setIsValidEmail('false');
    }
  };
  const handleNameOnChange = (e: { target: { value: React.SetStateAction<string>; }; }): void => {
    setName(e.target.value);
    console.log(name);
    if (name.trim().length === 0) setIsNameFilledIn('flase');
    if (name.trim().length > 0) setIsNameFilledIn('true');
  };
  const handleMessageOnChange = (
    e: { target: { value: React.SetStateAction<string>; }; },
  ): void => {
    setMessage(e.target.value);
    setIsMessageFilledIn('true');
  };

  return (
    <div>hi</div>
    // <Form onSubmit={handleSubmit}>
    //   <Label>Name</Label>
    //   <Input
    //     required
    //     type="text"
    //     value={name}
    //     onChange={handleNameOnChange}
    //   />
    //   {isNameFilledIn === 'false' && (<NotificationText>Please fill in your name</NotificationText>)}
    //   <Label>Email</Label>
    //   <Input
    //     required
    //     type="email"
    //     placeholder="you@mail.me"
    //     value={email}
    //     onChange={handleEmailOnChange}
    //   />
    //   {isValidEmail === 'false' && (<NotificationText>Please enter valid email</NotificationText>)}
    //   <Label>Message</Label>
    //   <TextArea
    //     value={message}
    //     onChange={handleMessageOnChange}
    //   />
    //   {isMessageFilledIn === 'false' && (<NotificationText>Please include a message</NotificationText>)}
    //   <button disabled={isValidEmail !== 'true' || isNameFilledIn !== 'true' || isMessageFilledIn !== 'true'} type="submit">Send Message</button>
    //   {notificatioMessage && notificatioMessage.type === 'error' && (<Notification onClick={handleCloseNotification} type="error" width="450px" message={notificatioMessage.text} />)}
    //   {emailSent && notificatioMessage && notificatioMessage.type === 'success' && (<Notification onClick={handleCloseNotification} type="success" width="450px" message={notificatioMessage.text} />)}
    // </Form>
  );
};

export default ContactForm;
