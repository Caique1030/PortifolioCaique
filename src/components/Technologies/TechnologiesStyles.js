import styled, { css, keyframes } from 'styled-components'

const tagIn = keyframes`
  from { opacity: 0; transform: scale(0.85) translateY(8px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding-bottom: 4.8rem;

  @media ${p => p.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }
`

export const SkillCategory = styled.div`
  background: #FFFFFF;
  border: 1px solid #E4E1D9;
  border-radius: 12px;
  padding: 2.4rem;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    border-color: #C7C3F3;
  }
`

export const SkillCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.6rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid #F3F4F6;

  .icon {
    font-size: 1.8rem;
    color: ${p => p.$color || '#4F46E5'};
    line-height: 1;
  }
`

export const SkillCategoryTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: #111111;
  letter-spacing: -0.01em;
`

export const SkillTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const SkillTag = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.5rem 1.1rem;
  border-radius: 6px;
  border: 1px solid;
  cursor: default;
  opacity: 0;
  transition: transform 0.2s ease;

  ${p => p.$inView && css`
    animation: ${tagIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    animation-delay: ${p.$delay || 0}ms;
  `}

  color: ${p => p.$color || '#4F46E5'};
  background: ${p => p.$color ? `${p.$color}0D` : '#EEF2FF'};
  border-color: ${p => p.$color ? `${p.$color}33` : '#C7D2FE'};

  &:hover {
    background: ${p => p.$color ? `${p.$color}1A` : '#E0E7FF'};
    transform: translateY(-1px);
  }
`

// Legacy compat exports
export const ImageContainer = styled.div``
export const MainImage = styled.img``
export const List = styled.ul``
export const ListContainer = styled.div``
export const ListTitle = styled.h4``
export const ListParagraph = styled.p``
export const ListItem = styled.li``
export const ListIcon = styled.img``
export const TechIcon = styled.div``
export const SkillTags = styled.div``
