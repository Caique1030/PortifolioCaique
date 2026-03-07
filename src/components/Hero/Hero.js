import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { personalInfo } from '../../constants/constants';
import { Section } from '../../styles/GlobalComponents';
import {
  CodeDecoration,
  CTAGroup,
  CTALink,
  CTAPrimary,
  HeroGrid,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  LeftSection,
  RoleBadge,
  StatusDot,
  SummaryText,
} from './HeroStyles';

const Hero = () => (
  <HeroSection>
    <Section nopadding>
      <HeroGrid>
        <LeftSection>
          <RoleBadge>
            <StatusDot />
            Disponível para oportunidades
          </RoleBadge>

          <HeroTitle>
            Caique<br />
            <span>Junior</span><br />
            Da Silva
          </HeroTitle>

          <HeroSubtitle>{personalInfo.tagline}</HeroSubtitle>

          <SummaryText>{personalInfo.summary}</SummaryText>

          <CTAGroup>
            <CTAPrimary
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size="1.8rem" />
              GitHub
            </CTAPrimary>
            <CTALink
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size="1.8rem" />
              LinkedIn
            </CTALink>
          </CTAGroup>
        </LeftSection>

        <CodeDecoration aria-hidden="true">
          <pre>
{`const developer = {
  name: "Caique Junior",
  role: "Full Stack Dev",
  stack: [
    "React", "TypeScript",
    "Java", "Spring Boot",
    "Node.js", "Flutter"
  ],
  status: "available",
  location: "Passos, MG"
};`}
          </pre>
        </CodeDecoration>
      </HeroGrid>
    </Section>
  </HeroSection>
);

export default Hero;
