import styled from "styled-components"

export const FooterWrapper = styled.footer`
  max-width: 1136px;
  margin: 0 auto;
  padding: 4rem 4.8rem 3.2rem;
  border-top: 1px solid #E4E1D9;

  @media ${p => p.theme.breakpoints.sm} {
    padding: 3.2rem 1.6rem 2.4rem;
  }
`

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.4rem;
  margin-bottom: 3.2rem;

  @media ${p => p.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 2rem;
  }
`

export const ContactList = styled.div`
  display: flex;
  gap: 4rem;

  @media ${p => p.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 1.2rem;
  }
`

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  span {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9CA3AF;
  }

  a {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #374151;
    transition: color 0.2s ease;

    &:hover {
      color: #4F46E5;
    }
  }
`

export const FooterSocials = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.4rem;
  border-top: 1px solid #F3F4F6;
  gap: 1.6rem;

  p {
    font-family: 'Fira Code', monospace;
    font-size: 1.2rem;
    color: #9CA3AF;
    white-space: nowrap;
  }

  @media ${p => p.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
`

export const FooterQuote = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-style: italic;
  font-size: 1.4rem;
  color: #9CA3AF;
  line-height: 1.5;
`

// Legacy compat exports
export const FooterWrapper2 = FooterWrapper
export const LinkItem = styled.a``
export const SocialIconsContainer = styled.div``
export const CompanyContainer = styled.div``
export const Slogan = styled.p``
export const SocialContainer = styled.div``
export const LinkList = styled.ul``
export const LinkColumn = styled.div``
export const LinkTitle = styled.h4``
