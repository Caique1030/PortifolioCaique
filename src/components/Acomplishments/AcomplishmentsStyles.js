import styled from "styled-components"

export const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.6rem;
  padding-bottom: 4.8rem;

  @media ${p => p.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`

export const CertCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E4E1D9;
  border-radius: 10px;
  padding: 2rem;
  transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &:hover {
    border-color: #C7C3F3;
    box-shadow: 0 6px 24px rgba(79, 70, 229, 0.08);
    transform: translateY(-2px);
  }
`

export const CertArea = styled.span`
  display: inline-block;
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 0.3rem 0.9rem;
  border-radius: 4px;
  width: fit-content;
  color: ${p => p.$color};
  background: ${p => p.$bg};
  border: 1px solid ${p => p.$border};
`

export const CertTitle = styled.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #111111;
  line-height: 1.45;
  flex: 1;
`

export const CertPlatform = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  color: #9CA3AF;
  margin-top: 0.4rem;

  span {
    color: #059669;
    font-weight: 700;
  }
`

// Legacy compat exports
export const Boxes = styled.div``
export const Box = styled.div``
export const BoxNum = styled.h5``
export const BoxText = styled.p``
export const Join = styled.div``
export const JoinText = styled.h5``
export const IconContainer = styled.div``
