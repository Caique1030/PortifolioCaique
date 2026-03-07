import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { personalInfo } from '../../constants/constants';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  FooterBottom,
  FooterWrapper,
  ContactItem,
  ContactList,
  FooterQuote,
  FooterSocials,
  FooterTop,
} from './FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <FooterTop>
      <ContactList>
        <ContactItem>
          <span>Contato</span>
          <a href={`tel:${personalInfo.contact.phone}`}>{personalInfo.contact.phone}</a>
        </ContactItem>
        <ContactItem>
          <span>Email</span>
          <a href={`mailto:${personalInfo.contact.email}`}>{personalInfo.contact.email}</a>
        </ContactItem>
      </ContactList>

      <FooterSocials>
        <SocialIcons href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <AiFillGithub size="2.4rem" />
        </SocialIcons>
        <SocialIcons href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <AiFillLinkedin size="2.4rem" />
        </SocialIcons>
      </FooterSocials>
    </FooterTop>

    <FooterBottom>
      <FooterQuote>
        "Sabendo que a provação da vossa fé produz paciência." — Tiago 1:3
      </FooterQuote>
      <p>© {new Date().getFullYear()} Caique Junior Da Silva</p>
    </FooterBottom>
  </FooterWrapper>
);

export default Footer;
