import React from 'react';
import styled from 'styled-components';
import { FaPlayCircle } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import ButtonLink from './ButtonLink';
import { ButtonWrapper } from '../pages/About';
import { StyleProps } from './ExperienceCard';

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
  repo: string;
  cardWidth: string;
  key: string;
}

const CardWrapper = styled.article<StyleProps>`
  width: ${({ width }) => width};
  background-color: var(--primary);
`;

const ImageWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  display: inline-block;
  img {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: capitalize;
  margin-bottom: 1.5rem;
  color: var(--highlight);
`;

const TextContentWrapper = styled.section`
  margin-top: 1rem;
  padding: 1rem 2rem 3rem;
  border-radius: 12px;
  color: var(--primaryText);
`;

const LinkTitle = styled.h3`
  font-size: 1.75rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  font-family: 'RobotoMono Regular';
  margin-top: 1rem;
`;

const IconWrapper = styled.div`
  width: 3rem; 
  display: inline-block; 
  padding-right: 1rem; 
`;

const ProjectCard: React.FC<Props> = ({
  image,
  title,
  text,
  cardWidth,
  repo,
  link,
  key,
  children,
}) => (
  <CardWrapper key={key} width={cardWidth}>
    <ImageWrapper>
      {image && <img src={image} alt={title} />}
    </ImageWrapper>
    <TextContentWrapper>
      <Title>{title}</Title>
      <ButtonWrapper>
        <ButtonLink
          href={link}
          variant="primary"
        >
          <>
            <IconWrapper>
              <FaPlayCircle />
            </IconWrapper>
            <LinkTitle>
              Demo
            </LinkTitle>
          </>
        </ButtonLink>
        <ButtonLink
          href={repo}
          variant="primary"
        >
          <>
            <div style={{ width: '3rem', display: 'inline-block', paddingRight: '1rem' }}>
              <SiGithub />
            </div>
            <LinkTitle>
              Git Repo
            </LinkTitle>
          </>
        </ButtonLink>
      </ButtonWrapper>
      <Text>{text}</Text>
    </TextContentWrapper>
    {children}
  </CardWrapper>
);

export default ProjectCard;
