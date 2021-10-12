import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/images/hero-image-min.png';
import LinkButton from '../ui/ButtonLink';
import { ButtonWrapper } from './About';

const HeroContentWrapper = styled.article`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10rem 0 6rem;
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  position: relative;
  top: -100px;
  text-align: left;
  span {
    display: inline-block;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    top: -75px;
  }
`;

export const ImpactText = styled.span`
  font-family: 'Montserrat SemiBold';
  font-size: 7rem;
  color: var(--highlight);
`;

const ImageWrapper = styled.section`
  max-width: 500px;
  width: 100%;
  max-height: 600px;
  padding: 4rem;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 3rem 1rem 4rem;
  }
  img {
    width: 100%;
    position: relative;
    right: -225px;
    bottom: 10px;
    @media only screen and (max-width: 768px) {
      right: 0;
      bottom: 40px;
    }
  }
`;

export const ParagraphWrapper = styled.section`
  max-width: 600px;
  margin: 0 auto 4rem;
  font-size: 1.8rem;
  line-height: 1.3em;
  text-align: left;
  padding: 0 1rem;
  p {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Hero: React.FC = () => (
  <HeroContentWrapper>
    <ImageWrapper>
      <img src={heroImage} alt="sam" />
      <PageTitle>
        <span>Hi, </span>
        <ImpactText>I&apos;m Sam</ImpactText>
      </PageTitle>
    </ImageWrapper>
    <ParagraphWrapper>
      <p>I love coding. Especially JavaScript, React, and CSS (styled components too!)</p>
      <p>
        Looking for work that combines my newfound love for code,
        with my communications and education background.
      </p>
    </ParagraphWrapper>
    <ButtonWrapper>
      <LinkButton
        variant="primary"
        to="/projects"
        href={null}
      >
        my projects
      </LinkButton>
      <LinkButton
        variant="secondary"
        to="/contact"
        href={null}
      >
        contact me
      </LinkButton>
    </ButtonWrapper>
  </HeroContentWrapper>
);

export default Hero;
