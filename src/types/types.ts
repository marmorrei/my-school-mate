import { ReactNode } from 'react';

export interface SelectProps {
  label: string;
  id: string;
  options: string[];
  name: string;
  // selections: {
  //   name: string;
  //   specificCompetence: string;
  //   assessmentCriteria: string;
  // };
  setSelections: React.Dispatch<
    React.SetStateAction<{
      name: string;
      specificCompetence: string;
      assessmentCriteria: string;
    }>
  >;
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
  user_id: string | undefined;
  name: string;
  surname: string;
} | null;

export type UserContextType = {
  userData: UserType;
  updateUserData: (newUserData: UserType) => void;
};

export type LoginContextType = {
  isLogged: boolean;
  updateLoginState: (newLoginState: boolean) => void;
};

export type OptionsType = string[];

export interface CycleData {
  'subject-areas-cycle-1': {
    mathematics: {
      'specific-competences': {
        'specific-competence-1': {
          content: 'Traduir problemes i interpretar situacions quotidianes fent-ne una representació matemàtica personal a través de conceptes, eines i estratègies per analitzar-ne els elements més rellevants. ';
          'assessment-criteria': {
            '1.1': ' Iniciar-se en la interpretació de la informació d’un problema i d’una situació de la vida quotidiana responent a les preguntes plantejades o fent noves preguntes.';
            '1.2': ' Proposar representacions matemàtiques, amb recursos manipulatius, gràfics i digitals, orientades a la resolució de problemes i de situacions de la vida quotidiana.';
          };
        };
      };
    };
  };
}
