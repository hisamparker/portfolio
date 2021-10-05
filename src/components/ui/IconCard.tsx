/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';

interface Props {
  iconWidth: string;
  iconHeight: string;
  title: string;
  cardWidth: string;
  border: string;
  key: string;
}

interface IconWrapperProps {
  width: string;
  height: string;
}

interface CardWrapperProps {
  width: string;
  border: string;
  key: string;
}

const CardWrapper = styled.article<CardWrapperProps>`
  width: ${({ width }) => width};
  border: ${({ border }) => border};
  border-radius: 15px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
`;

const IconWrapper = styled.section<IconWrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-bottom: 0.75rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: var(--highlight);
`;

const IconCard: React.FC<Props> = ({
  iconWidth, iconHeight, title, cardWidth, key, border, children,
}) => (
  <CardWrapper key={key} width={cardWidth} border={border}>
    <IconWrapper width={iconWidth} height={iconHeight}>
      {children}
    </IconWrapper>
    <Title>{title}</Title>
  </CardWrapper>
);

export default IconCard;
