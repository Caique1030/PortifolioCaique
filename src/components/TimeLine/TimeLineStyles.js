
import styled from 'styled-components'

export const TimelineWrapper = styled.div`
  position: relative;
  padding-left: 2.8rem;
  margin-bottom: 4rem;

  @media ${p => p.theme.breakpoints.sm} {
    padding-left: 2rem;
  }
`

export const TimelineLine = styled.div`
  position: absolute;
  left: 7px;
  top: 12px;
  bottom: 20px;
  width: 1.5px;
  background: linear-gradient(to bottom, #4F46E5, rgba(79, 70, 229, 0.1));
`

export const ExperienceItem = styled.div`
  position: relative;
  padding-bottom: 3.2rem;
  cursor: pointer;

  .dot {
    position: absolute;
    left: -2.6rem;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4F46E5;
    border: 2px solid #F8F6F1;
    box-shadow: 0 0 0 2px #4F46E5;
    transition: transform 0.2s ease;
    z-index: 1;
  }

  &:hover .dot {
    transform: scale(1.3);
  }

  .content {
    background: #FFFFFF;
    border: 1px solid #E4E1D9;
    border-radius: 12px;
    padding: 2rem 2.4rem;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;

    &:hover {
      border-color: #C7C3F3;
      box-shadow: 0 4px 20px rgba(79, 70, 229, 0.07);
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.6rem;
    margin-bottom: 0.4rem;

    @media ${p => p.theme.breakpoints.sm} {
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  .title-group {
    flex: 1;
  }

  .meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    flex-shrink: 0;

    @media ${p => p.theme.breakpoints.sm} {
      align-items: flex-start;
    }
  }

  .toggle-hint {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    color: #9CA3AF;
    padding: 0;
    margin-top: 1.2rem;
    transition: color 0.2s ease;

    &:hover {
      color: #4F46E5;
    }

    &:focus { outline: none; }
  }

  &:last-child {
    padding-bottom: 0;
  }
`

export const RoleTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #111111;
  letter-spacing: -0.02em;
  margin-bottom: 0.3rem;
`

export const CompanyName = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #4F46E5;
`

export const PeriodText = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  color: #9CA3AF;
  white-space: nowrap;
`

export const CurrentBadge = styled.span`
  display: inline-block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #059669;
  background: #ECFDF5;
  border: 1px solid #A7F3D0;
  border-radius: 100px;
  padding: 0.2rem 0.8rem;
`

export const ProjectBadge = styled.span`
  display: inline-block;
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  color: #7C3AED;
  background: #F5F3FF;
  border: 1px solid #DDD6FE;
  border-radius: 4px;
  padding: 0.2rem 0.8rem;
`

export const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.4rem 0 1.2rem;
`

export const HighlightItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.4rem;
  line-height: 1.65;
  color: #6B7280;
  padding: 0.4rem 0 0.4rem 1.6rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.9rem;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #4F46E5;
    opacity: 0.5;
  }
`

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.8rem;
`

export const TechTag = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  color: #6B7280;
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  padding: 0.3rem 0.8rem;
`

export const EducationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background: #FFFFFF;
  border: 1px solid #E4E1D9;
  border-radius: 12px;
  padding: 2.4rem;
  margin-bottom: 4.8rem;
  border-left: 3px solid #4F46E5;
`

export const EducationIcon = styled.div`
  font-size: 2.8rem;
  flex-shrink: 0;
`

export const EducationInfo = styled.div`
  h4 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.7rem;
    color: #111111;
    margin-bottom: 0.4rem;
    letter-spacing: -0.02em;
  }

  p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.4rem;
    color: #4F46E5;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  span {
    font-family: 'Fira Code', monospace;
    font-size: 1.2rem;
    color: #9CA3AF;
  }
`

// Legacy exports for compat
export const CarouselContainer = styled.ul``
export const CarouselMobileScrollNode = styled.div``
export const CarouselItem = styled.div``
export const CarouselItemTitle = styled.h4``
export const CarouselItemImg = styled.svg``
export const CarouselItemText = styled.p``
export const CarouselButtons = styled.div``
export const CarouselButton = styled.button``
export const CarouselButtonDot = styled.div``
