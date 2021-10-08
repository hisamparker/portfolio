import React from 'react';
import styled from 'styled-components';
import experienceArray from '../../assets/data/experience';
import Tech from '../layout/Tech';
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
  max-width: 90vw;
  grid-template-columns: repeat(auto-fill, max(400px));
  grid-gap: 4rem;
  margin-bottom: 5rem;
  justify-items: center;
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
    <ContentWrapper>
      <PageTitle>experience</PageTitle>
      <ItemsWrapper>
        {experienceArray.map((experience) => (
          <ExperienceCard
            title={experience.jobTitle}
            company={experience.company}
            timeline={experience.timeline}
            text={experience.desc}
            cardWidth="90%"
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
    <Tech />
  </>
);

export default Experience;
