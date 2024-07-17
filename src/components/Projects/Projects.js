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
        <SectionTitle main>Projetos Front-end</SectionTitle>
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
                  <ExternalLinks href={visit} target="_blank">Visite</ExternalLinks>
                  <ExternalLinks href={source} target="_blank">Código</ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          )}
        </GridContainer>
        <SectionDivider />
      </Section>
      <Section nopadding id="projectsbe">
        <SectionTitle main>Projetos Back-end</SectionTitle>
      </Section>
      <Dropdown style={{ marginLeft: '120px' }}>
        <Button style={{width: '500px', height: '50px', fontSize: '20px'}} dropdownToggle onClick={() => setHidden(!hidden)}>
          {' '}
          Links dos repositórios projetos de Back-end
        </Button>
        <DropdownMenu
          style={{fontSize: '20px'}}
          hidden={hidden}
          fullWidth={true}
          toggle={() => setHidden(!hidden)}
        >
          <a
            href="https://github.com/rafaelromanoz/talker-manager-api-node"
            target="_blank"
          >
            <DropdownItem>Talker Manager API (Node-Express)</DropdownItem>
          </a>
          <DropdownDivider />
          <a
            href="https://github.com/rafaelromanoz/mysql-normalization"
            target="_blank"
          >
            <DropdownItem>MySQL-Normalizations (MySQL)</DropdownItem>
          </a>
          <DropdownDivider />
          <a
            href="https://github.com/rafaelromanoz/vocabulary-booster-mysql-project"
            target="_blank"
          >
            <DropdownItem>MySQL Vocabulary Booster(MySQL)</DropdownItem>
          </a>
          <DropdownDivider />
          <a
            href="https://github.com/rafaelromanoz/mongodb-aggregations-project"
            target="_blank"
          >
            <DropdownItem>MongoDB Aggregations(MongoDB)</DropdownItem>
          </a>
          <DropdownDivider />
          <a
            href="https://github.com/rafaelromanoz/mongodb-commerce-project"
            target="_blank"
          >
            <DropdownItem>MongoDB Commerce (MongoDB)</DropdownItem>
          </a>
          <DropdownDivider />
          
          <a
            href="https://github.com/rafaelromanoz/docker-todo-project"
            target="_blank"
          >
            <DropdownItem>Docker TODO-List(Docker)</DropdownItem>
          </a>
          <DropdownDivider/>
          <a
            href="https://github.com/rafaelromanoz/react-testing-library-project"
            target="_blank"
          >
            <DropdownItem>React Testing Library (RTL)</DropdownItem>
          </a>
          <DropdownDivider/>
          <a
            href="https://github.com/rafaelromanoz/jest-tests"
            target="_blank"
          >
            <DropdownItem>Jest Tests (Jest, Mocks)</DropdownItem>
          </a>
          <DropdownDivider />
        <a
            href="https://github.com/rafaelromanoz/sale_system_backend"
            target="_blank"
          >
            <DropdownItem>Sale System API(Back-end)</DropdownItem>
          </a>
          <DropdownDivider />
          <a
            href="https://github.com/rafaelromanoz/store-manager-api"
            target="_blank"
          >
            <DropdownItem>Store Manager(API)</DropdownItem>
          </a>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Projects;
