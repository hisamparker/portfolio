import React from 'react';
import projectsArray from '../../assets/data/projects';
import ProjectCard from '../ui/ProjectCard';
import { ButtonWrapper, PageTitle } from './About';
import LinkButton from '../ui/ButtonLink';
import { ContentWrapper, ItemsWrapper } from './Experience';

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
          cardWidth="100%"
          link={project.demo}
          key={project.id}
        />
      ))}
    </ItemsWrapper>
    <ButtonWrapper>
      <LinkButton
        variant="primary"
        to="/experience"
        href={null}
      >
        experience
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
);

export default Projects;
