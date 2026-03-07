import styled, { css, keyframes } from 'styled-components'

// ─── Animation keyframes ─────────────────────────────────────────────────────

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-24px); }
  to   { opacity: 1; transform: translateX(0); }
`

// ─── Reveal wrapper (used with useInView hook) ────────────────────────────────

export const Reveal = styled.div`
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${p => p.$delay || 0}ms;

  ${p => p.$inView && css`
    opacity: 1;
    transform: translateY(0);
  `}
`

// ─── Layout ───────────────────────────────────────────────────────────────────

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0"};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0"};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

// ─── Typography ───────────────────────────────────────────────────────────────

export const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4F46E5;
  margin-bottom: 1.2rem;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1px;
    background: #4F46E5;
  }
`

export const SectionTitle = styled.h2`
  font-family: 'Syne', sans-serif;
  font-weight: ${(props) => props.main ? '800' : '700'};
  font-size: ${(props) => props.main ? '6.4rem' : '4.8rem'};
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #111111;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '48px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '4.8rem' : '3.6rem'};
    padding: ${(props) => props.main ? '36px 0 12px' : '0'};
    margin-bottom: 12px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.main ? '3.6rem' : '2.8rem'};
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    margin-bottom: 8px;
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 720px;
  font-size: 1.8rem;
  line-height: 1.75;
  font-weight: 400;
  padding-bottom: 3.2rem;
  color: #6B7280;
  font-family: 'Plus Jakarta Sans', sans-serif;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.6rem;
    line-height: 1.7;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    line-height: 1.65;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #E4E1D9;
  margin: ${(props) => props.divider ? "4rem 0" : "2.4rem 0"};

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 2rem 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1.6rem 0;
  }
`

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.7;
  color: #6B7280;
  font-family: 'Plus Jakarta Sans', sans-serif;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`

// ─── Buttons ─────────────────────────────────────────────────────────────────

export const SecondaryBtn = styled.button`
  color: #4F46E5;
  background: none;
  border: 1.5px solid #4F46E5;
  border-radius: 6px;
  padding: 12px 28px;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
  width: fit-content;
  margin-top: 24px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: 'Plus Jakarta Sans', sans-serif;

  &:focus { outline: none; }

  &:hover {
    background: #4F46E5;
    color: #FFFFFF;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    width: 100%;
    font-size: 1.3rem;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '150px' : '200px'};
  height: ${({ alt }) => alt ? '44px' : '52px'};
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
  color: #FFFFFF;
  background: #4F46E5;
  cursor: pointer;
  transition: 0.25s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '180px'};
    height: 48px;
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 44px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 6px;
  color: #FFFFFF;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4F46E5;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: all 0.25s ease;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #3730A3;
  }

  &:focus { outline: none; }

  &:disabled {
    background: #818CF8;
    opacity: 0.5;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.25s ease;
  justify-content: center;
  border-radius: 6px;
  padding: 8px;

  &:hover {
    background-color: rgba(79, 70, 229, 0.08);
    transform: scale(1.1);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`
