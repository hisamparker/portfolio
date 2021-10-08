/* eslint-disable no-nested-ternary */
import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import Button from './Button';

interface InputProps {
  valid: boolean;
  error: boolean;
}

const validationSchema = Yup.object({
  name: Yup
    .string()
    .required('Name is required'),
  message: Yup
    .string()
    .required('Message is required'),
  email: Yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
});

const StyledForm = styled.form`
  background-color: var(--primary);
  border: 1px solid var(--primaryDark);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 400px;
  min-width: 350px;
  padding: 3rem;
  button {
    align-self: center;
  }
`;

const Input = styled.input<InputProps>`
  background-color: var(--primary);
  border: 1px solid ${({ valid, error }) => (valid ? 'green' : error ? 'red' : 'var(--lowlight)')};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;
const TextArea = styled.textarea<InputProps>`
  background-color: var(--primary);
  border: 1px solid ${({ valid, error }) => (valid ? 'green' : error ? 'red' : 'var(--lowlight)')};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  color: var(--primaryText);
  display: block;
  font-family: sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const NotificationText = styled.div<InputProps>`
  color: ${({ valid, error }) => (valid ? 'green' : error ? 'red' : 'transparent')};
  font-family: sans-serif;
  font-size: 1.25rem;
  height: 2rem;
  position: relative;
  top: -1.25rem;
`;

const Form: React.FC = () => (
  <>
    <Formik
      validateOnChange
      initialValues={{
        name: '',
        message: '',
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        const { name, email, message } = data;
        const serviceId = 'service_8zeycgu';
        const templateId = 'contact_form';
        const userId = 'user_ZT6CmHL5TWeQrDoDRYaDQ';
        const templateParams = {
          name,
          email,
          message,
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
          .then((response) => {
            console.log(response);
            resetForm();
          })
          .then((error) => {
            console.log(error);
          });
        setSubmitting(true);
        // make async call
        console.log('submit: ', data);
        setSubmitting(false);
      }}
    >
      {({
        isSubmitting, handleSubmit, errors, touched,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Field name="name" as={Input} valid={!errors.name && touched.name} error={errors.name && touched.name} />
          {errors.name && touched.name && (
            <NotificationText error valid={false}>{errors.name}</NotificationText>
          )}
          {!errors.name && touched.name && (
            <NotificationText error={false} valid>Yay!</NotificationText>
          )}
          <Label>Email</Label>
          <Field name="email" as={Input} valid={!errors.email && touched.email} error={errors.email && touched.email} />
          {errors.email && touched.email && (
            <NotificationText error valid={false}>{errors.email}</NotificationText>
          )}
          {!errors.email && touched.email && (
            <NotificationText error={false} valid>TY ♡</NotificationText>
          )}
          <Label>Message</Label>
          <Field name="message" as={TextArea} valid={!errors.message && touched.message} error={errors.message && touched.message} />
          {errors.message && touched.message && (
            <NotificationText error valid={false}>{errors.message}</NotificationText>
          )}
          {!errors.message && touched.message && (
            <NotificationText error={false} valid>Interesting</NotificationText>
          )}
          {/* display cur values - must also add values to form props */}
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  </>
);

export default Form;
