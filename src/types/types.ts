import { Dispatch, SetStateAction } from 'react';

export interface SelectProps {
  label: string;
  id: string;
  options: string[];
}

export type StudentContextType =
  | { id: string; name: string; surname: string; course: string; cycle: number }
  | Dispatch<
      SetStateAction<{
        id: string;
        name: string;
        surname: string;
        course: string;
        cycle: number;
      }>
    >;

export interface SubjectAreaContextType {
  name: string;
  specificCompetence: string;
  assessmentCriteria: string;
}

export interface LearningSituationContextType {
  title: string;
  subjectArea: string;
}

export interface KeyCompetenceContextType {
  name: string;
  specificCompetence: string;
  assessmentCriteria: string;
}
