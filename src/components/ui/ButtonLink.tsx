import React, { ReactChild, ReactChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyleProps {
  border: string;
  color: string;
  hoverColor: string;
  backgroundColor: string;
  radius: string
  width: string;
  height: string;
}

interface Props extends StyleProps {
  to?: string;
  href: string | null;
  children: ReactChild | ReactChildren | null
}

const StyledButtonLink = styled.div<StyleProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition: all 0.3s;
  position: relative;
  a {
    color: ${({ color }) => color};
    transition: all 0.3s;
    transform: scale(1, 1);
  }
  border: ${({ border }) => border};
  &:hover {
    border: none;
  }
  &::before, ::after {
    content: '';
    position: absolute;
    transition: all 0.3s;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    background: ${({ hoverColor }) => hoverColor};
    transform: scale(0.1, 1);
  }
  &:hover::before {
  opacity: 1;
  transform: scale(1, 1);
  }
  &:hover::after {
    transform: scale(1, .1);
    opacity: 0;
  }
`;

const ButtonLink: React.FC<Props> = ({
  border,
  color,
  hoverColor,
  backgroundColor,
  height,
  radius,
  width,
  to,
  href,
  children = null,
}) => (
  <>
    {href
      && (
        <a href={href}>
          <StyledButtonLink
            border={border}
            backgroundColor={backgroundColor}
            color={color}
            hoverColor={hoverColor}
            height={height}
            width={width}
            radius={radius}
          >
            {children}
          </StyledButtonLink>
        </a>
      )}
    {!href && to && (
    <Link to={to}>
      <StyledButtonLink
    // eslint-disable-next-line react/button-has-type
        border={border}
        backgroundColor={backgroundColor}
        color={color}
        hoverColor={hoverColor}
        height={height}
        width={width}
        radius={radius}
      >
        {children}
      </StyledButtonLink>
    </Link>
    )}
  </>
);

ButtonLink.defaultProps = {
  to: '/',
};

export default ButtonLink;
