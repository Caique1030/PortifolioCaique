import styled, { css, keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const HeroSection = styled.div`
  background: #F8F6F1;
  background-image: radial-gradient(rgba(79, 70, 229, 0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  padding: 8rem 0 6rem;
  min-height: 92vh;
  display: flex;
  align-items: center;

  @media ${p => p.theme.breakpoints.md} {
    padding: 6rem 0 4rem;
    min-height: auto;
  }

  @media ${p => p.theme.breakpoints.sm} {
    padding: 4rem 0 3rem;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.4rem;
  align-items: center;
  width: 100%;

  @media ${p => p.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const LeftSection = styled.div`
  animation: ${fadeSlideUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
`;

export const RoleBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: #059669;
  background: #ECFDF5;
  border: 1px solid #A7F3D0;
  border-radius: 100px;
  padding: 0.5rem 1.4rem;
  margin-bottom: 2.4rem;
`;

export const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #059669;
  flex-shrink: 0;
  animation: ${blink} 2.5s ease-in-out infinite;
`;

export const HeroTitle = styled.h1`
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(5.6rem, 8vw, 8.8rem);
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: #111111;
  margin-bottom: 1.6rem;
  animation: ${fadeSlideUp} 0.7s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;

  span {
    color: #4F46E5;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: 'Fira Code', monospace;
  font-size: 1.4rem;
  font-weight: 400;
  color: #9CA3AF;
  letter-spacing: 0.04em;
  margin-bottom: 2.4rem;
  animation: ${fadeSlideUp} 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;

  &::before {
    content: '$ ';
    color: #4F46E5;
  }
`;

export const SummaryText = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.7rem;
  line-height: 1.75;
  color: #6B7280;
  max-width: 520px;
  margin-bottom: 3.2rem;
  animation: ${fadeSlideUp} 0.7s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;

  @media ${p => p.theme.breakpoints.md} {
    font-size: 1.6rem;
  }
`;

export const CTAGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  animation: ${fadeSlideUp} 0.7s 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
`;

const ctaBase = css`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1.2rem 2.4rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;

  svg { flex-shrink: 0; }
`;

export const CTAPrimary = styled.a`
  ${ctaBase}
  background: #4F46E5;
  color: #FFFFFF;
  border: 1.5px solid #4F46E5;

  &:hover {
    background: #3730A3;
    border-color: #3730A3;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(79, 70, 229, 0.3);
  }
`;

export const CTALink = styled.a`
  ${ctaBase}
  background: transparent;
  color: #4F46E5;
  border: 1.5px solid #E4E1D9;

  &:hover {
    border-color: #4F46E5;
    background: #EEF2FF;
    transform: translateY(-2px);
  }
`;

export const CodeDecoration = styled.div`
  background: #1E1E3F;
  border-radius: 12px;
  padding: 2.8rem 3.2rem;
  font-family: 'Fira Code', monospace;
  font-size: 1.4rem;
  line-height: 1.7;
  color: #A8B4D8;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255,255,255,0.05);
  animation: ${fadeSlideUp} 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both,
             ${float} 6s 1s ease-in-out infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #4F46E5, #818CF8, #4F46E5);
    background-size: 200% 100%;
  }

  pre {
    margin: 0;
    white-space: pre;
    overflow-x: auto;
  }

  /* Syntax highlighting via CSS */
  pre {
    .k { color: #C792EA; }
  }

  /* Color the code manually via spans or just let Fira Code render it clean */
  color: #A8B4D8;

  /* strings */
  pre::before {
    content: '';
  }

  @media ${p => p.theme.breakpoints.md} {
    display: none;
  }
`;

/* Named color tokens for code block syntax coloring */
export const Token = styled.span`
  &.keyword  { color: #C792EA; }
  &.string   { color: #C3E88D; }
  &.property { color: #82AAFF; }
  &.bracket  { color: #89DDFF; }
  &.comment  { color: #546E7A; font-style: italic; }
  &.name     { color: #FFCB6B; }
`;
