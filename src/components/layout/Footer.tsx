import React from 'react';
import styled from 'styled-components';
import LinkColumn from '../elements/LinkColumn';
import { ParagraphWrapper } from '../pages/Hero';

const FooterContent = styled.article`
  background-color: var(--primaryDark);
  padding: 8rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContentBlock = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CollumnBlock = styled.article`
  display: flex;
  justify-content: space-around;
  section {
    max-width: 50%;
  }
`;

const SectionTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--highlight);
`;

const Footer: React.FC = () => (
  <FooterContent>
    <ContentBlock>
      <SectionTitle className="footer__col1__title">Sam Parker</SectionTitle>
      <ParagraphWrapper>
        Content designer and front-end web developper. I love React, JavaScript, and CSS ♡
      </ParagraphWrapper>
    </ContentBlock>
    <CollumnBlock>
      <LinkColumn
        heading="Important Links"
        links={[
          {
            title: 'Home',
            path: '/',
            type: 'Link',
          },
          {
            type: 'Link',
            title: 'About',
            path: '/about',
          },
          {
            type: 'Link',
            title: 'Projects',
            path: '/projects',
          },
          {
            type: 'Link',
            title: 'Contact',
            path: '/contact',
          },
        ]}
      />
      <LinkColumn
        heading="social Links"
        links={[
          {
            title: 'Facebook',
            path: 'http://facebook.com',
          },
          {
            title: 'Twitter',
            path: 'http://twitter.com',
          },
          {
            title: 'Instagram',
            path: 'http://instagram.com',
          },
        ]}
      />
    </CollumnBlock>
  </FooterContent>
);

export default Footer;
