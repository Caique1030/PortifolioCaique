import styled, { css } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2.4rem;
  padding: 2.4rem 0 4rem;

  @media ${p => p.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    padding: 1.6rem 0 3.2rem;
  }
`;

export const ProjectCard = styled.article`
  background: #FFFFFF;
  border: 1px solid #E4E1D9;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    border-color: #C7C3F3;
    box-shadow: 0 16px 48px rgba(79, 70, 229, 0.1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  filter: grayscale(0.1);
  transition: filter 0.3s ease, transform 0.3s ease;

  ${ProjectCard}:hover & {
    filter: grayscale(0);
    transform: scale(1.02);
  }
`;

export const CardType = styled.span`
  display: inline-block;
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  padding: 0.3rem 0.9rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  ${p => p.$professional ? css`
    color: #4F46E5;
    background: #EEF2FF;
    border: 1px solid #C7D2FE;
  ` : css`
    color: #059669;
    background: #ECFDF5;
    border: 1px solid #A7F3D0;
  `}
`;

export const CardTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #111111;
  margin-bottom: 0.8rem;
  letter-spacing: -0.02em;
`;

export const CardInfo = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.4rem;
  line-height: 1.65;
  color: #6B7280;
  margin-bottom: 1.6rem;
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.8rem;
`;

export const CardTag = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  color: #6B7280;
  background: #F3F4F6;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  border: 1px solid #E5E7EB;
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 1.2rem;
  border-top: 1px solid #F3F4F6;
  padding-top: 1.6rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: #4F46E5;
    transition: color 0.2s ease;

    &:hover {
      color: #3730A3;
    }

    svg { flex-shrink: 0; }
  }
`;

export const FilterBar = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.4rem;
`;

export const FilterBtn = styled.button`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0.6rem 1.6rem;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;

  ${p => p.$active ? css`
    background: #4F46E5;
    color: #FFFFFF;
    border-color: #4F46E5;
  ` : css`
    background: transparent;
    color: #6B7280;
    border-color: #E4E1D9;

    &:hover {
      border-color: #4F46E5;
      color: #4F46E5;
    }
  `}
`;

// Legacy compatibility exports
export const Img = styled.img`width: 100%; height: 200px; object-fit: cover;`;
export const BlogCard = ProjectCard;
export const TitleContent = styled.div``;
export const HeaderThree = CardTitle;
export const Hr = styled.hr``;
export const TagList = CardTags;
export const Tag = CardTag;
export const CardInfo2 = CardInfo;
export const UtilityList = CardFooter;
export const ExternalLinks = styled.a``;
export const NavbarDropdownContent = styled.div``;
export const NavbarDropdown = styled.div``;
export const DropDownItem = styled.a``;
export const DropDownHeader = styled.button``;
