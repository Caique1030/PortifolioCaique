import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hi, my name is Caique! <br/>
      welcome to my personal portfolio
      </SectionTitle>
      <SectionText>
      See below, my projects, knowledge, a little about my background and my contacts.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Caique1030'}>Veja mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;