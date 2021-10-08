import React from 'react';
import styled from 'styled-components';
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
  <ContentWrapper>
    <PageTitle>
      oh hai,
      <ImpactText>Contact me:</ImpactText>
    </PageTitle>
    <Form />
  </ContentWrapper>
);

export default Contact;
