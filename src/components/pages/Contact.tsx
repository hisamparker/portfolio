import React from 'react';
import styled from 'styled-components';
import { ImpactText, PageTitle } from './Hero';
import Form from '../ui/Form';

// const nameValidation = (name: string): string => {
//   if (name.trim() === '') {
//     return 'Your name is required';
//   }
//   if (/[^a-zA-Z -]/.test(name)) {
//     return 'Invalid characters';
//   }
//   return 'valid';
// };

// const emailValidation = (email: string): string => {
//   if (
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//       email,
//     )
//   ) {
//     return 'valid';
//   }
//   if (email.trim() === '') {
//     return 'Email is required';
//   }
//   return 'Please enter a valid email';
// };

// const messageValidation = (message: string): string => {
//   if (message.trim() === '') {
//     return 'Message is required';
//   }
//   return 'valid';
// };

// const validate = {
//   name: nameValidation,
//   email: emailValidation,
//   messgae: messageValidation,
// };

// const initialValues = {
//   name: '',
//   email: '',
//   message: '',
// };

const ContentWrapper = styled.article`
  padding: 10rem 2rem;
  margin: 0 auto;
  max-width: var(--maxWidth);
  display: grid;
`;

const Contact: React.FC = () => (
  <ContentWrapper>
    <PageTitle>
      oh hai,
      <ImpactText>Contact me :</ImpactText>
    </PageTitle>
    <Form />
  </ContentWrapper>
);

export default Contact;
