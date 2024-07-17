import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px'}}>
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href="#projects">
          Front-end projects
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#projectsbe"> 
              Back-end projects
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech">
              Technologies
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#about">
              About me
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons legacyBehavior href='https://github.com/Caique1030'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons legacyBehavior href='https://www.linkedin.com/in/caique-junior-da-silva-369403126/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
