import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider,
} from 'styled-dropdown-component';
import { Button } from 'styled-button-component';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Front-end projects</SectionTitle>
        <GridContainer>
          {projects.map(
            ({ id, image, title, description, tags, source, visit, type }) => (
              <BlogCard key={id}>
                <Img src={image}/>
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks>
                  <ExternalLinks href={source} target="_blank">Code</ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          )}
        </GridContainer>
        <SectionDivider />
      </Section>
      <Section nopadding id="projectsbe">
        <SectionTitle main>Back-end projects</SectionTitle>
      </Section>
      <Dropdown style={{ marginLeft: '120px' }}>
        <Button style={{width: '500px', height: '50px', fontSize: '20px'}} dropdownToggle onClick={() => setHidden(!hidden)}>
          {' '}
          Back-end project repository links
        </Button>
        <DropdownMenu
          style={{fontSize: '20px'}}
          hidden={hidden}
          fullWidth={true}
          toggle={() => setHidden(!hidden)}
        >
          <a
            href="https://github.com/Caique1030/streaming"
            target="_blank"
          >
            <DropdownItem>streaming (JAVA)</DropdownItem>
          </a>
          <DropdownDivider />
          <a
            href="https://github.com/Caique1030/Crud-com-Spring-Security"
            target="_blank"
          >
            <DropdownItem>Crud with Spring Security (Google SingIN)</DropdownItem>
          </a>
          <DropdownDivider />
          <a
            href="https://github.com/Caique1030/Portifolio-simples"
            target="_blank"
          >
            <DropdownItem>Portfolio with HTML5</DropdownItem>
          </a>
          <DropdownDivider />
          <a
            href="https://github.com/Caique1030/UsuarioController"
            target="_blank"
          >
            <DropdownItem>Project in (VB.net) User Control</DropdownItem>
          </a>
          <DropdownDivider />
          <a
            href="https://github.com/Caique1030/Gestor-de-tarefas"
            target="_blank"
          >
            <DropdownItem>Task Manager (JAVA)</DropdownItem>
          </a>
          <DropdownDivider />
          
          <a
            href="https://github.com/Caique1030/Asp.NetMVC-CRUD"
            target="_blank"
          >
            <DropdownItem>Asp.NetMVC-CRUD (VB.net)</DropdownItem>
          </a>
          <DropdownDivider/>
          <a
            href="https://github.com/Caique1030/UsuarioApi"
            target="_blank"
          >
            <DropdownItem>Api User (Asp.netCore)</DropdownItem>
          </a>
          <a
            href="https://github.com/Caique1030/Frases-De-Filme-Back-End"
            target="_blank"
          >
            <DropdownItem>Frases Back End (Java SpringBoot)</DropdownItem>
          </a>
          <a
            href="https://github.com/Caique1030/VideoScreen"
            target="_blank"
          >
            <DropdownItem>Filmes Back End (Java SpringBoot)</DropdownItem>
          </a>
          <DropdownDivider/>
          <a
            href="https://github.com/Caique1030/FilmesApi"
            target="_blank"
          >
            <DropdownItem>API for Listing Fikmes (C#) </DropdownItem>
          </a>
          <DropdownDivider />
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Projects;
