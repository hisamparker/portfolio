import React from 'react';
import styled from 'styled-components';
import experienceArray from '../../assets/data/experience';
import ExperienceCard from '../ui/ExperienceCard';

const ContentWrapper = styled.article`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 5rem 1rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemsWrapper = styled.section`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(auto-fill, max(400px));
  grid-gap: 4rem;
`;

const PageTitle = styled.h1`
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    text-transform: uppercase;
    margin-bottom: 5rem;
    color: var(--highlight);
`;

const Experience: React.FC = () => (
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
  </ContentWrapper>
);

export default Experience;
