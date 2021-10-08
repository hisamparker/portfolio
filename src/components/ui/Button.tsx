import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface StyleProps {
  variant: string;
}

interface Props extends StyleProps {
  type: 'submit' | 'reset' | 'button';
  children: ReactChild | ReactChildren | null
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
  disabled: boolean;
}

const ButtonStyles = styled.button<StyleProps>`
  background-color: ${({ variant }) => (variant === 'primary' ? 'transparent' : 'var(--primary)')};
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition: all 0.3s;
  position: relative;
  a {
    color: var(--primaryText);
    transition: all 0.3s;
    transform: scale(1, 1);
  }
  border: ${({ variant }) => (variant === 'primary' ? 'solid var(--primaryLight) 1px' : null)};
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

const Button: React.FC<Props> = ({
  type = 'button',
  children = null,
  onClick,
  disabled,
  variant,
}) => (
  <ButtonStyles
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    disabled={disabled}
    variant={variant}
  >
    {children}
  </ButtonStyles>
);

export default Button;
