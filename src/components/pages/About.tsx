import React from 'react';
import styled from 'styled-components';
import AboutImage from '../../assets/images/about-image-min.png';
import Tech from '../layout/Tech';
import LinkButton from '../ui/ButtonLink';

const AboutContentWrapper = styled.article`
  padding: 10rem 2rem 5rem 2rem;
  margin: 0 auto;
  max-width: var(--maxWidth);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const TextContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  @media only screen and (max-width: 768px) {
    max-width: 90vw;
    align-items: center;
    text-align: center;

  }
`;

export const PageTitle = styled.h1`
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    color: var(--highlight);
`;

const ParagraphWrapper = styled.section`
  max-width: 600px;
  font-size: 1.8rem;
  line-height: 1.4em;
  margin-bottom: 6rem;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.section`
  max-width: 500px;
  padding-left: 2rem;
  @media only screen and (max-width: 768px) {
    padding: 0;
    grid-row: 1;
    max-width: 316px;
  }
`;

const About: React.FC = () => (
  <>
    <AboutContentWrapper>
      <TextContentWrapper>
        <PageTitle>about</PageTitle>
        <ParagraphWrapper>
          hi. I&apos;m Sam. I like cookies. Chocolate chip and https.
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
      </TextContentWrapper>
      <ImageWrapper>
        <img src={AboutImage} alt="samara face" />
      </ImageWrapper>
    </AboutContentWrapper>
    <Tech />
  </>
);

export default About;
