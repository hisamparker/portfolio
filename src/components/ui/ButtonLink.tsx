import React, { ReactChild, ReactChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyleProps {
  variant: string;
}

interface Props extends StyleProps {
  to?: string;
  href: string | null;
  children: ReactChild | ReactChildren | null
}

const StyledButtonLink = styled.div<StyleProps>`
  background-color: ${({ variant }) => (variant === 'primary' ? 'transparent' : 'var(--primary)')};
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition: all 0.3s;
  position: relative;
  text-transform: capitalize;
  a {
    color: var(--primaryText);
    transition: all 0.3s;
    transform: scale(1, 1);
    
  }
  border: ${({ variant }) => (variant === 'primary' ? 'solid var(--primaryLight) 1px' : null)};
  &:hover {
    border-color: transparent;
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
    background: var(--primaryHover);
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
  variant,
  to,
  href,
  children = null,
}) => (
  <>
    {href
      && (
        <a href={href} target="_blank" rel="noreferrer">
          <StyledButtonLink
            variant={variant}
          >
            {children}
          </StyledButtonLink>
        </a>
      )}
    {!href && to && (
    <Link to={to}>
      <StyledButtonLink
        variant={variant}
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
