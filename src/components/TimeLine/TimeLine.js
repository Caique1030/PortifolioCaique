import React, { useState } from 'react';
import { education, experiences } from '../../constants/constants';
import useInView from '../../hooks/useInView';
import { Reveal, Section, SectionDivider, SectionLabel, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  CompanyName,
  CurrentBadge,
  EducationCard,
  EducationIcon,
  EducationInfo,
  ExperienceItem,
  HighlightItem,
  HighlightList,
  PeriodText,
  ProjectBadge,
  RoleTitle,
  TechList,
  TechTag,
  TimelineLine,
  TimelineWrapper,
} from './TimeLineStyles';

const Timeline = () => {
  const [expanded, setExpanded] = useState(new Set([1, 2]));
  const [ref, inView] = useInView();

  const toggle = (id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <Section id="experience">
      <SectionDivider />
      <Reveal $inView={inView} ref={ref}>
        <SectionLabel>Trajetória</SectionLabel>
        <SectionTitle>Experiência</SectionTitle>
        <SectionText>
          Minha jornada profissional construindo sistemas reais e impactando usuários.
        </SectionText>
      </Reveal>

      <TimelineWrapper>
        <TimelineLine />
        {experiences.map((exp, index) => {
          const [itemRef, itemInView] = useInView();
          const isOpen = expanded.has(exp.id);
          return (
            <Reveal key={exp.id} ref={itemRef} $inView={itemInView} $delay={index * 100}>
              <ExperienceItem onClick={() => toggle(exp.id)}>
                <div className="dot" aria-hidden="true" />
                <div className="content">
                  <div className="header">
                    <div className="title-group">
                      <RoleTitle>{exp.role}</RoleTitle>
                      <CompanyName>{exp.company}</CompanyName>
                    </div>
                    <div className="meta">
                      <PeriodText>{exp.period}</PeriodText>
                      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                        {exp.current && <CurrentBadge>Atual</CurrentBadge>}
                        {exp.project && <ProjectBadge>{exp.project}</ProjectBadge>}
                      </div>
                    </div>
                  </div>

                  {isOpen && (
                    <>
                      <HighlightList>
                        {exp.highlights.map((h, i) => (
                          <HighlightItem key={i}>{h}</HighlightItem>
                        ))}
                      </HighlightList>
                      <TechList>
                        {exp.tech.map(t => (
                          <TechTag key={t}>{t}</TechTag>
                        ))}
                      </TechList>
                    </>
                  )}

                  <button className="toggle-hint" aria-label={isOpen ? 'Recolher' : 'Expandir'}>
                    {isOpen ? '↑ recolher' : '↓ ver detalhes'}
                  </button>
                </div>
              </ExperienceItem>
            </Reveal>
          );
        })}
      </TimelineWrapper>

      <Reveal $inView={inView} $delay={600}>
        <EducationCard>
          <EducationIcon>🎓</EducationIcon>
          <EducationInfo>
            <h4>{education.degree}</h4>
            <p>{education.institution}</p>
            <span>{education.graduation}</span>
          </EducationInfo>
        </EducationCard>
      </Reveal>
    </Section>
  );
};

export default Timeline;
