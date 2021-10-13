import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import experienceArray from '../../assets/data/experience';
import ExperienceCard from '../ui/ExperienceCard';
import { ButtonWrapper } from './About';
import LinkButton from '../ui/ButtonLink';

export const ContentWrapper = styled.article`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 10rem 1rem 7rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const ItemsWrapper = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(0px,400px));
  grid-gap: 2rem;
  margin-bottom: 5rem;
  justify-items: center;
  width:100%;
`;

export const PageTitle = styled.h1`
    font-family: 'Montserrat Bold';
    font-size: 4.5rem;
    text-transform: uppercase;
    margin-bottom: 5rem;
    color: var(--highlight);
`;

const Experience: React.FC = () => (
  <>
    <Helmet>
      <title>Work Experience Page of Sam&apos;`s Portfolio</title>
    </Helmet>
    <ContentWrapper>
      <PageTitle>experience</PageTitle>
      <ItemsWrapper>
        {experienceArray.map((experience) => (
          <ExperienceCard
            title={experience.jobTitle}
            company={experience.company}
            timeline={experience.timeline}
            text={experience.desc}
            cardWidth="100%"
            key={experience.id}
          />
        ))}
      </ItemsWrapper>
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
    </ContentWrapper>
  </>
);

export default Experience;
