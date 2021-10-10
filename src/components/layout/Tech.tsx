import { v4 as uuidv4 } from 'uuid';
import { IconContext } from 'react-icons';
import {
  SiReact,
  SiGraphql,
  SiTypescript,
  SiJavascript,
  SiNodeDotJs,
  SiMongodb,
  SiCss3,
  SiGithub,
  SiNextDotJs,
} from 'react-icons/si';
import React from 'react';
import styled from 'styled-components';
import IconCard from '../ui/IconCard';

const tech = [
  {
    id: uuidv4(),
    name: 'React.js',
    desc:
      'My very favourite library / framework / thing about Facebook♡',
    logo: SiReact,
  },
  {
    id: uuidv4(),
    name: 'JavaScript',
    desc:
      'Vanilla is delicious! Both functional and object oriented programming are fine by me.',
    logo: SiJavascript,
  },
  {
    id: uuidv4(),
    name: 'TypeScriptL',
    desc:
      'This is the way♡',
    logo: SiTypescript,
  },
  {
    id: uuidv4(),
    name: 'Express',
    desc:
      'I can make a little server, write REST APIS, and npm all day.',
    logo: SiNodeDotJs,
  },
  {
    id: uuidv4(),
    name: 'MongoDB',
    desc:
      'I&apos;ve built projects using both MongoDB and MongoDB.',
    logo: SiMongodb,
  },
  {
    id: uuidv4(),
    name: 'Git & GitHub',
    desc:
      'Yay version controll!',
    logo: SiGithub,
  },
  {
    id: uuidv4(),
    name: 'GraphQL',
    desc:
      'New to GraphQL, but very in love. My latest project was built with GraphQL and Apollo.',
    logo: SiGraphql,
  },
  {
    id: uuidv4(),
    name: 'CSS & JSX',
    desc:
      'The cascade is strong with this one.',
    logo: SiCss3,
  },
  {
    id: uuidv4(),
    name: 'Next.js',
    desc:
      'I miss active links, but Next is super fun to work with.',
    logo: SiNextDotJs,
  },
];

const ContentWrapper = styled.article`
  margin: 0 auto;
  max-width: 100vw;
  padding: 4rem 1rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primaryDark);
`;

const SectionTitle = styled.h1`
  color: var(--highlight);
  font-size: 4rem;
  margin-bottom: 3rem;
`;

const ItemsWrapper = styled.section`
  display: grid;
  justify-items: center;
  width: 90%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1.5rem;
`;

const Tech: React.FC = () => (
  <IconContext.Provider value={{ style: { fill: 'var(--primaryText)' } }}>
    <ContentWrapper>
      <SectionTitle>the tech i know</SectionTitle>
      <ItemsWrapper>
        {tech.map((techItem) => {
          const Icon = techItem.logo;
          return (
            <IconCard
              iconWidth="65px"
              iconHeight="65px"
              title={techItem.name}
              cardWidth="125px"
              key={uuidv4()}
              border="solid var(--primaryBorder) 1.5px"
            >
              <Icon />
            </IconCard>
          );
        })}
      </ItemsWrapper>
    </ContentWrapper>
  </IconContext.Provider>
);

export default Tech;
