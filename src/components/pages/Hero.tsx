import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/images/hero-image.png';
import LinkButton from '../ui/ButtonLink';

const HeroContentWrapper = styled.article`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 0 6rem;
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
  max-width: 600px;
  width: 100%;
  height: 600px;
  padding: 2rem;
  margin: 0 auto 4rem;
  img {
    width: 100%;
    position: relative;
    right: -200px;
    @media only screen and (max-width: 768px) {
    right: 0;
  }
  }
`;

export const ParagraphWrapper = styled.section`
  max-width: 600px;
  margin: 0 auto 2rem;
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
        <span>hi, </span>
        <ImpactText>i&apos;m sam</ImpactText>
      </PageTitle>
    </ImageWrapper>
    <ParagraphWrapper>
      <p>I love coding. Especially JavaScript, React, and CSS (styled components too!)</p>
      <p>
        Looking for work that combines my newfound love for code,
        with my communications and education background.
      </p>
    </ParagraphWrapper>
    <LinkButton
      hoverColor="var(--primaryHover)"
      border="solid var(--primaryLight) 1px"
      color="var(--primaryLight)"
      backgroundColor="transparent"
      height="75px"
      width="200px"
      radius="0"
      to="/projects"
      href={null}
    >
      my projects
    </LinkButton>
  </HeroContentWrapper>
);

export default Hero;
