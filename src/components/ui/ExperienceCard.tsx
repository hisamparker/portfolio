import React from 'react';
import styled from 'styled-components';

export interface StyleProps {
  width: string;
}

interface Props {
  title: string;
  company: string;
  timeline: string;
  text: string;
  cardWidth: string;
  key: string;
}

const CardWrapper = styled.article<StyleProps>`
  width: ${({ width }) => width};
  background-color: var(--primary);
  margin-top: 1rem;
  padding: 2rem 2rem 3rem;
  border-radius: 12px;
  color: var(--primaryText);
`;

const Title = styled.h1`
  font-size: 2.25rem;
  text-transform: capitalize;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: solid black 10px;
`;

const Text = styled.p`
  font-size: 1.6rem;
  font-family: 'RobotoMono Regular';
  margin-bottom: 1rem;
`;

const Subtitle = styled(Text)`
  text-transform: capitalize;
  font-weight: bold;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: solid black 2px;
`;

const Date = styled(Text)`
  color: var(--highlight);
`;

const ProjectCard: React.FC<Props> = ({
  title,
  company,
  timeline,
  text,
  cardWidth,
  key,
}) => (
  <CardWrapper key={key} width={cardWidth}>
    <Title>{title}</Title>
    <Subtitle>{company}</Subtitle>
    <Date>{timeline}</Date>
    <Text>{text}</Text>
  </CardWrapper>
);

export default ProjectCard;
