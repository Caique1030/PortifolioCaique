import React from 'react';
import { skills } from '../../constants/constants';
import useInView from '../../hooks/useInView';
import { Reveal, Section, SectionDivider, SectionLabel, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { CategoryGrid, SkillCategory, SkillCategoryHeader, SkillCategoryTitle, SkillTag, SkillTagList } from './TechnologiesStyles';

const categoryConfig = {
  frontend: { label: 'Front-end', icon: '⬡', color: '#4F46E5' },
  backend:  { label: 'Back-end',  icon: '⚙',  color: '#7C3AED' },
  mobile:   { label: 'Mobile',    icon: '◈',  color: '#2563EB' },
  database: { label: 'Banco de Dados', icon: '◉', color: '#0891B2' },
  others:   { label: 'Outros',    icon: '◻',  color: '#059669' },
};

const Technologies = () => {
  const [ref, inView] = useInView();

  return (
    <Section id="skills">
      <SectionDivider />
      <Reveal $inView={inView} ref={ref}>
        <SectionLabel>Stack</SectionLabel>
        <SectionTitle>Habilidades Técnicas</SectionTitle>
        <SectionText>
          Tecnologias e ferramentas que utilizo para criar soluções web, mobile e backend.
        </SectionText>
      </Reveal>

      <CategoryGrid>
        {Object.entries(skills).map(([category, tags], catIndex) => {
          const [catRef, catInView] = useInView();
          const config = categoryConfig[category];
          return (
            <Reveal key={category} ref={catRef} $inView={catInView} $delay={catIndex * 80}>
              <SkillCategory>
                <SkillCategoryHeader $color={config.color}>
                  <span className="icon">{config.icon}</span>
                  <SkillCategoryTitle>{config.label}</SkillCategoryTitle>
                </SkillCategoryHeader>
                <SkillTagList>
                  {tags.map((tag, i) => (
                    <SkillTag key={tag} $delay={i * 40} $inView={catInView} $color={config.color}>
                      {tag}
                    </SkillTag>
                  ))}
                </SkillTagList>
              </SkillCategory>
            </Reveal>
          );
        })}
      </CategoryGrid>
    </Section>
  );
};

export default Technologies;
