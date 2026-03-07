import React, { useState } from 'react';
import { AiOutlineCode, AiOutlineLink } from 'react-icons/ai';
import { projects } from '../../constants/constants';
import useInView from '../../hooks/useInView';
import { Reveal, Section, SectionDivider, SectionLabel, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  CardFooter,
  CardImage,
  CardInfo,
  CardTag,
  CardTags,
  CardTitle,
  CardType,
  FilterBar,
  FilterBtn,
  GridContainer,
  ProjectCard,
} from './ProjectsStyles';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView();

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter);

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <Reveal $inView={inView} ref={ref}>
        <SectionLabel>Portfólio</SectionLabel>
        <SectionTitle>Projetos</SectionTitle>
        <SectionText>
          Uma seleção de projetos profissionais e pessoais demonstrando expertise em full stack development.
        </SectionText>
      </Reveal>

      <FilterBar>
        {['all', 'professional', 'personal'].map(f => (
          <FilterBtn
            key={f}
            $active={filter === f}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'Todos' : f === 'professional' ? 'Profissional' : 'Pessoal'}
          </FilterBtn>
        ))}
      </FilterBar>

      <GridContainer>
        {filtered.map((project, index) => {
          const [cardRef, cardInView] = useInView();
          return (
            <Reveal key={project.id} ref={cardRef} $inView={cardInView} $delay={index * 80}>
              <ProjectCard>
                <CardImage src={project.image} alt={project.title} loading="lazy" />
                <div style={{ padding: '2rem' }}>
                  <CardType $professional={project.type === 'professional'}>
                    {project.type === 'professional' ? 'Profissional' : 'Personal'}
                  </CardType>
                  <CardTitle>{project.title}</CardTitle>
                  <CardInfo>{project.description}</CardInfo>
                  <CardTags>
                    {project.tags.map(tag => (
                      <CardTag key={tag}>{tag}</CardTag>
                    ))}
                  </CardTags>
                  <CardFooter>
                    <a href={project.visit} target="_blank" rel="noopener noreferrer" aria-label="Visitar projeto">
                      <AiOutlineLink size="1.8rem" />
                      Demo
                    </a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label="Ver código">
                      <AiOutlineCode size="1.8rem" />
                      Código
                    </a>
                  </CardFooter>
                </div>
              </ProjectCard>
            </Reveal>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
