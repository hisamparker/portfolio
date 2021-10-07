import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import Button from './Button';

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
  margin-bottom: 2rem;
`;
const TextArea = styled.textarea`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  color: #3d3d3d;
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const NotificationText = styled.div`
  color: red;
  font-family: sans-serif;
  font-size: 12px;
  height: 30px;
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
        const userId = process.env.REACT_APP_NOT_SECRET_USER_ID;
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // eslint-disable-next-line no-unused-vars
        values, isSubmitting, handleSubmit, errors, touched,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Field name="name" as={Input} />
          {errors.name && touched.name
            ? (<NotificationText>{errors.name}</NotificationText>)
            : null}
          <Label>Email</Label>
          <Field name="email" as={Input} />
          {errors.email && touched.email
            ? (<NotificationText>{errors.email}</NotificationText>)
            : null}
          <Label>Message</Label>
          <Field name="message" as={TextArea} />
          {errors.message && touched.message
            ? (<NotificationText>{errors.message}</NotificationText>)
            : null}
          {/* display cur values */}
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          <Button
            type="submit"
            hoverColor="var(--primaryHover)"
            border="solid var(--primaryLight) 1px"
            color="var(highlight)"
            backgroundColor="var(--primary)"
            height="75px"
            width="200px"
            radius="0"
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
