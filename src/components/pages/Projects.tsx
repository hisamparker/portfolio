import React from 'react';
import styled from 'styled-components';
import projectsArray from '../../assets/data/projects';
import ProjectCard from '../ui/ProjectCard';

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

const Projects: React.FC = () => (
  <ContentWrapper>
    <PageTitle>projects</PageTitle>
    <ItemsWrapper>
      {projectsArray.map((project) => (
        <ProjectCard
          image={project.img}
          title={project.name}
          repo={project.repo}
          text={project.desc}
          imageWidth="100%"
          cardWidth="100%"
          link={project.demo}
          key={project.id}
        />
      ))}
    </ItemsWrapper>
  </ContentWrapper>
);

export default Projects;
