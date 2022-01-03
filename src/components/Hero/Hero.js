import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! I'm Hector. <br />
          Welcome to my Portfolio.
        </SectionTitle>
        <SectionText>
        I am a software developer and a current student at MSU Denver with a Major in C.S. and a Minor in Mathematics. <br />
        I am graduating on May 2022.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;