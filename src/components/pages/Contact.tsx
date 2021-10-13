import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { ImpactText } from './Hero';
import Form from '../ui/Form';

const ContentWrapper = styled.article`
  padding: 15rem 2rem;
  margin: 0 auto;
  max-width: var(--maxWidth);
  display: grid;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  position: relative;
  text-align: left;
  margin-bottom: 5rem;
  span {
    display: inline-block;
    width: 100%;
  }
`;

const Contact: React.FC = () => (
  <>
    <Helmet>
      <title>Contact Page of Sam&apos;`s Portfolio</title>
    </Helmet>
    <ContentWrapper>
      <PageTitle>
        Oh hai,
        <ImpactText>Contact me:</ImpactText>
      </PageTitle>
      <Form />
    </ContentWrapper>
  </>
);

export default Contact;
