import { type ReactNode } from 'react';

export interface SelectProps {
  label: string;
  id: string;
  options: string[] | undefined;
  name: string;
  setSelection: React.Dispatch<React.SetStateAction<string>>;
}
export interface Props {
  children: ReactNode;
}

export type StudentType =
  | {
      id: string;
      name: string;
      surname: string;
      course: string;
      cycle: number;
    }
  | undefined;

export interface StudentContextType {
  selectedStudent: StudentType;
  updateStudent: (newStudent: StudentType) => void;
}

export type SubjectAreaType =
  | {
      name: string;
      specificCompetence: string;
      assessmentCriteria: string;
    }
  | undefined;

export interface SubjectAreaContextType {
  selectedSubjectArea: SubjectAreaType;
  updateSubjectArea: (newSubjectArea: SubjectAreaType) => void;
}

export type LearningSituationType =
  | {
      id: string;
      title: string;
      specific_competence: string;
      assessment_criteria: string;
    }
  | undefined;

export interface LearningSituationContextType {
  selectedLearningSituation: LearningSituationType;
  updateLearningSituation: (
    newLearningSituation: LearningSituationType,
  ) => void;
}

export type KeyCompetenceType =
  | {
      name: string;
      specificCompetence: string;
      assessmentCriteria: string;
    }
  | undefined;

export interface KeyCompetenceContextType {
  selectedKeyCompetence: KeyCompetenceType;
  updateKeyCompetence: (newKeyCompetence: KeyCompetenceType) => void;
}
export type FileType =
  | {
      id: string;
      file: File;
    }
  | undefined;

export interface EvidenceContextType {
  file: FileType;
  comment: string | undefined;
  updateFile: (newFile: FileType) => void;
  updateComment: (newComment: string | undefined) => void;
}

export type UserType = {
  user_id: string | undefined;
  name: string;
  surname: string;
} | null;

export interface UserContextType {
  userData: UserType;
  updateUserData: (newUserData: UserType) => void;
}

export interface LoginContextType {
  isLogged: boolean;
  updateLoginState: (newLoginState: boolean) => void;
}

export type OptionsType = string[] | undefined;
