import React from 'react';
import styled from 'styled-components';
import { SiGithub } from 'react-icons/si';
import { FaPlayCircle } from 'react-icons/fa';
import ButtonLink from './ButtonLink';
import { ButtonWrapper } from '../pages/About';

interface ImageWrapperProps {
  width: string;
}

interface CardWrapperProps {
  width: string;
  key: string;
}

interface Props {
  image: string;
  imageWidth: string;
  title: string;
  text: string;
  link: string;
  repo: string;
  cardWidth: string;
  key: string;
}

const CardWrapper = styled.article<CardWrapperProps>`
  width: ${({ width }) => width};
  background-color: var(--primary);
`;

const ImageWrapper = styled.section<ImageWrapperProps>`
  width: ${({ width }) => width};
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
  imageWidth,
  cardWidth,
  repo,
  link,
  key,
}) => (
  <CardWrapper key={key} width={cardWidth}>
    <ImageWrapper width={imageWidth}>
      {image && <img src={image} alt={title} />}
    </ImageWrapper>
    <TextContentWrapper>
      <Title>{title}</Title>
      <ButtonWrapper>
        <ButtonLink
          href={link}
          hoverColor="var(--primaryHover)"
          border="solid var(--primaryLight) 1px"
          color="var(--primaryLight)"
          backgroundColor="transparent"
          height="50px"
          width="125px"
          radius="0"
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
          hoverColor="var(--primaryHover)"
          border="solid var(--primaryLight) 1px"
          color="var(--primaryLight)"
          backgroundColor="transparent"
          height="50px"
          width="150px"
          radius="0"
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
  </CardWrapper>
);

export default ProjectCard;
