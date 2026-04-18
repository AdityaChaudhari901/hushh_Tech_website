import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const SECTION_IDS = {
  hero: 'hero',
  window: 'contribution-window',
  tracks: 'project-tracks',
  steps: 'how-to-participate',
  lookFor: 'what-we-look-for',
  rules: 'rules',
  evaluation: 'evaluation',
  prizes: 'prizes',
  hiring: 'hiring',
  eligibility: 'eligibility',
  contact: 'contact',
} as const;

export interface UseHackathonLogicReturn {
  handleBack: () => void;
  openExternal: (url: string) => void;
}

export const useHackathonLogic = (): UseHackathonLogicReturn => {
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const openExternal = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return { handleBack, openExternal };
};
