import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 4.8rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${p => p.$scrolled
    ? 'rgba(248, 246, 241, 0.92)'
    : 'rgba(248, 246, 241, 0.98)'
  };
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${p => p.$scrolled ? '#E4E1D9' : 'transparent'};
  transition: border-color 0.3s ease, background 0.3s ease;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1.2rem 2.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 1.6rem;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;

export const Logo = styled.span`
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #111111;
  letter-spacing: -0.03em;
  transition: color 0.2s ease;

  span {
    color: #4F46E5;
  }

  &:hover {
    color: #4F46E5;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  a {
    display: flex;
    align-items: center;
  }
`;

export const Div2 = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  list-style: none;

  li {
    position: relative;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1.4rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavLink = styled.a`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #6B7280;
  cursor: pointer;
  transition: color 0.2s ease;
  position: relative;
  padding-bottom: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background: #4F46E5;
    transition: width 0.25s ease;
  }

  &:hover {
    color: #4F46E5;

    &::after {
      width: 100%;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`;

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9CA3AF;
  border-radius: 6px;
  padding: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: #4F46E5;
    background: rgba(79, 70, 229, 0.08);
  }
`;

// Legacy exports for Footer compatibility
export const Span = styled.span``;
export const ContactDropDown = styled.button``;
export const NavProductsIcon = styled.span``;
