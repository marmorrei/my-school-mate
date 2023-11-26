import { ReactNode } from 'react';

export interface SelectProps {
  label: string;
  id: string;
  options: string[];
}
export type Props = {
  children: ReactNode;
};

export type StudentType = {
  id: string;
  name: string;
  surname: string;
  course: string;
  cycle: number;
} | null;

export type StudentContextType = {
  selectedStudent: StudentType;
  updateStudent: (newStudent: StudentType) => void;
};

export type SubjectAreaType = {
  name: string;
  specificCompetence: string;
  assessmentCriteria: string;
} | null;

export type SubjectAreaContextType = {
  selectedSubjectArea: SubjectAreaType;
  updateSubjectArea: (newSubjectArea: SubjectAreaType) => void;
};

export type LearningSituationType = {
  title: string;
  subjectArea: string;
} | null;

export type LearningSituationContextType = {
  selectedLearningSituation: LearningSituationType;
  updateLearningSituation: (
    newLearningSituation: LearningSituationType,
  ) => void;
};

export type KeyCompetenceType = {
  name: string;
  specificCompetence: string;
  assessmentCriteria: string;
} | null;

export type KeyCompetenceContextType = {
  selectedKeyCompetence: KeyCompetenceType;
  updateKeyCompetence: (newKeyCompetence: KeyCompetenceType) => void;
};

export type UserType = {
  name: string;
  surname: string;
} | null;

export type UserContextType = {
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
};
