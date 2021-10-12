import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import projectsArray from '../../assets/data/projects';
import ProjectCard from '../ui/ProjectCard';
import { ButtonWrapper, PageTitle } from './About';
import LinkButton from '../ui/ButtonLink';
import { ContentWrapper, ItemsWrapper } from './Experience';
import IconCard from '../ui/IconCard';

const IconWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
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
          cardWidth="100%"
          link={project.demo}
          key={project.id}

        >
          <IconWrapper key={uuidv4()}>
            {project.tech.map((techItem) => (
              <IconCard
                title={null}
                iconWidth="15px"
                iconHeight="15px"
                cardWidth="45px"
                key={uuidv4()}
                border="solid var(--primaryBorder) 1.5px"
              >
                {techItem}
              </IconCard>
            ))}
          </IconWrapper>
        </ProjectCard>
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
