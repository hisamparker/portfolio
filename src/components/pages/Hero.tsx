import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/images/thumbs-up.jpg';

const HeroContent = styled.article`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 10rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  position: relative;
  text-align: left;
  span {
    display: inline-block;
    width: 100%;
  }
`;

const ImpactText = styled.span`
  font-family: 'Montserrat SemiBold';
  font-size: 7rem;
  color: var(--highlight);
`;

const ImageWrapper = styled.section`
  max-width: 500px;
  width: 100%;
  height: 600px;
  margin: 0 auto 1rem;
  border: 2px solid var(--primaryLight);
`;

export const ParagraphWrapper = styled.section`
  max-width: 500px;
  margin: 0 auto;
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
  <HeroContent>
    <PageTitle>
      <span>hi, </span>
      <ImpactText>i&apos;m sam</ImpactText>
    </PageTitle>
    <ImageWrapper>
      <img src={heroImage} alt="sam" />
    </ImageWrapper>
    <ParagraphWrapper>
      <p>I love coding. Especially JavaScript, React, and CSS (styled components too!)</p>
      <p>
        Looking for work that combines my newfound love for code,
        with my communications and education background.
      </p>
    </ParagraphWrapper>
  </HeroContent>
);

export default Hero;
