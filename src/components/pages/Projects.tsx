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
          cardWidth="90%"
          link={project.demo}
          key={project.id}
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
        to="/experience"
        href={null}
      >
        experience
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
);

export default Projects;
