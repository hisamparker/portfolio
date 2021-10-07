import React from 'react';
import styled from 'styled-components';
import experienceArray from '../../assets/data/experience';
import Tech from '../layout/Tech';
import ExperienceCard from '../ui/ExperienceCard';
import { ButtonWrapper } from './About';
import LinkButton from '../ui/ButtonLink';

const ContentWrapper = styled.article`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 10rem 1rem 7rem;
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
  margin-bottom: 5rem;
`;

const PageTitle = styled.h1`
    font-family: 'Montserrat Bold';
    font-size: 6rem;
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
            cardWidth="100%"
            key={experience.id}
          />
        ))}
      </ItemsWrapper>
      <ButtonWrapper>
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
        <LinkButton
          hoverColor="var(--primaryHover)"
          border="0"
          color="var(--primaryLight)"
          backgroundColor="var(--primary)"
          height="75px"
          width="200px"
          radius="0"
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
