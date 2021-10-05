import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

interface StyleProps {
  border: string;
  color: string;
  radius: string
  width: string;
  height: string;
}

interface Props extends StyleProps {
  type?: 'submit' | 'reset' | 'button';
  children: ReactChild | ReactChildren | null
  onClick: () => void;
}

const StyledButton = styled.button<StyleProps>`
  border: ${({ border }) => border};
  background-color: ${({ color }) => color};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
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
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
