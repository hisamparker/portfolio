import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

interface StyleProps {
  width: string;
  type: string
}
interface Props extends StyleProps {
  message: string;
  onClick: () => void;
}

const StyledNotification = styled.article<StyleProps>`
  background-color: ${({ type }) => (type === 'error' ? 'var(--errorLight)' : 'var(--successLight)')};
  border-top: 8px solid ${({ type }) => (type === 'error' ? 'var(--error)' : 'var(--success)')};
  padding: 1rem 2rem 2rem;
  font-size: 1.5rem;
  color: var(--highlight);
  max-width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  div {
    align-self: flex-end;
  }
`;

const CloseButton = styled(MdClose)`
  fill: var(--highlight);
  width: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Notification: React.FC<Props> = ({
  onClick, message, width, type,
}) => (
  <StyledNotification type={type} width={width}>
    <div
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <CloseButton />
    </div>
    {message}
  </StyledNotification>
);

export default Notification;
