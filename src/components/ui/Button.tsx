import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface StyleProps {
  border: string;
  color: string;
  radius: string
  width: string;
  height: string;
  hoverColor: string;
  backgroundColor: string;
}

interface Props extends StyleProps {
  type?: 'submit' | 'reset' | 'button';
  children: ReactChild | ReactChildren | null
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
  disabled: boolean;
}

// const StyledButton = styled.button<StyleProps>`
//   border: ${({ border }) => border};
//   background-color: ${({ color }) => color};
//   width: ${({ width }) => width};
//   height: ${({ height }) => height};
//   border-radius: ${({ radius }) => radius};
// `;
const StyledButton = styled.button<StyleProps>`
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
    cursor: pointer;
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

const Button: React.FC<Props> = ({
  type = 'button',
  border,
  color,
  children = null,
  height,
  onClick,
  radius,
  width,
  hoverColor,
  backgroundColor,
  disabled,
}) => (
  <StyledButton
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    border={border}
    color={color}
    height={height}
    width={width}
    radius={radius}
    hoverColor={hoverColor}
    backgroundColor={backgroundColor}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
