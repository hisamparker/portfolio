import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkObject {
  type?: string,
  title: string,
  path: string,
}

interface Props {
  heading: string;
  links: LinkObject[]
}

const ColumnWrapper = styled.section`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

const LinkColumn: React.FC<Props> = ({
  heading = 'Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) => (
  <ColumnWrapper>
    <h2 className="heading">{heading}</h2>
    <ul>
      {links.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={item.title + index}>
          {item.type === 'Link' ? (
            <Link to={item.path}>{item.title}</Link>
          ) : (
            <a href={item.path} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  </ColumnWrapper>
);

export default LinkColumn;
