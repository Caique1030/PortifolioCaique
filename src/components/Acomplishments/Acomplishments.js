import React from 'react';
import { certifications } from '../../constants/constants';
import useInView from '../../hooks/useInView';
import { Reveal, Section, SectionDivider, SectionLabel, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { CertArea, CertCard, CertGrid, CertPlatform, CertTitle } from './AcomplishmentsStyles';

const areaColors = {
  backend:  { color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  frontend: { color: '#4F46E5', bg: '#EEF2FF', border: '#C7D2FE' },
  others:   { color: '#059669', bg: '#ECFDF5', border: '#A7F3D0' },
};

const Acomplishments = () => {
  const [ref, inView] = useInView();

  return (
    <Section id="certifications">
      <SectionDivider />
      <Reveal $inView={inView} ref={ref}>
        <SectionLabel>Formação</SectionLabel>
        <SectionTitle>Certificações</SectionTitle>
        <SectionText>
          Certificações obtidas na plataforma Alura, aprofundando conhecimentos em backend, frontend e boas práticas.
        </SectionText>
      </Reveal>

      <CertGrid>
        {certifications.map((cert, index) => {
          const [certRef, certInView] = useInView();
          const style = areaColors[cert.area] || areaColors.others;
          return (
            <Reveal key={cert.id} ref={certRef} $inView={certInView} $delay={index * 60}>
              <CertCard>
                <CertArea $color={style.color} $bg={style.bg} $border={style.border}>
                  {cert.area === 'backend' ? 'Backend' : cert.area === 'frontend' ? 'Frontend' : 'Outros'}
                </CertArea>
                <CertTitle>{cert.title}</CertTitle>
                <CertPlatform>
                  <span>✓</span>
                  {cert.platform}
                </CertPlatform>
              </CertCard>
            </Reveal>
          );
        })}
      </CertGrid>
    </Section>
  );
};

export default Acomplishments;
