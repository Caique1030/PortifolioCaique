import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, Logo, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container $scrolled={scrolled}>
      <Div1>
        <Link legacyBehavior href="/">
          <a>
            <Logo>CJS<span>.</span></Logo>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link legacyBehavior href="#experience">
            <NavLink>Experiência</NavLink>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#projects">
            <NavLink>Projetos</NavLink>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#skills">
            <NavLink>Habilidades</NavLink>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#certifications">
            <NavLink>Certificações</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Caique1030" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <AiFillGithub size="2.2rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/caiquejuniordasilva/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <AiFillLinkedin size="2.2rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
