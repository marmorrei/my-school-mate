import { useState, useContext, createContext } from 'react';
import {
  type Props,
  type StudentType,
  type StudentContextType,
  type SubjectAreaType,
  type SubjectAreaContextType,
  type LearningSituationType,
  type LearningSituationContextType,
  type KeyCompetenceType,
  type KeyCompetenceContextType,
} from '../types/types';

// CREATE CONTEXTS
const StudentContext = createContext<StudentContextType>(
  {} as StudentContextType,
);

const SubjectAreaContext = createContext<SubjectAreaContextType>(
  {} as SubjectAreaContextType,
);

const LearningSituationContext = createContext<LearningSituationContextType>(
  {} as LearningSituationContextType,
);

const KeyCompetenceContext = createContext<KeyCompetenceContextType>(
  {} as KeyCompetenceContextType,
);

// CUSTOM HOOKS
export const useStudentContext = (): StudentContextType => {
  const studentContext = useContext(StudentContext);
  if (studentContext === undefined)
    throw new Error(
      'useStudentContext must be used within a EvidenceCollectionProvider',
    );
  return studentContext;
};

export const useSubjectAreaContext = (): SubjectAreaContextType => {
  const subjectAreaContext = useContext(SubjectAreaContext);
  if (subjectAreaContext === undefined)
    throw new Error(
      'useSubjectAreaContext must be used within a EvidenceCollectionProvider',
    );
  return subjectAreaContext;
};

export const useLearningSituationContext = (): LearningSituationContextType => {
  const learningSituationContext = useContext(LearningSituationContext);
  if (learningSituationContext === undefined)
    throw new Error(
      'useLearningSituationContext must be used within a EvidenceCollectionProvider',
    );
  return learningSituationContext;
};

export const useKeyCompetenceContext = (): KeyCompetenceContextType => {
  const keyCompetenceContext = useContext(KeyCompetenceContext);
  if (keyCompetenceContext === undefined)
    throw new Error(
      'useKeyCompetenceContext must be used within a EvidenceCollectionProvider',
    );
  return keyCompetenceContext;
};

// CONTEXT PROVIDER
export const EvidenceCollectionProvider = (props: Props): JSX.Element => {
  // useState
  const [selectedStudent, setSelectedStudent] = useState<StudentType>(null);

  const [selectedSubjectArea, setSelectedSubjectArea] =
    useState<SubjectAreaType>(null);

  const [selectedLearningSituation, setSelectedLearningSituation] =
    useState<LearningSituationType>(null);

  const [selectedKeyCompetence, setSelectedKeyCompetence] =
    useState<KeyCompetenceType>(null);

  // update states
  const updateStudent = (newStudent: StudentType): void => {
    setSelectedStudent(newStudent);
  };

  const updateSubjectArea = (newSubjectArea: SubjectAreaType): void => {
    setSelectedSubjectArea(newSubjectArea);
  };

  const updateLearningSituation = (
    newLearningSituation: LearningSituationType,
  ): void => {
    setSelectedLearningSituation(newLearningSituation);
  };

  const updateKeyCompetence = (newKeyCompetence: KeyCompetenceType): void => {
    setSelectedKeyCompetence(newKeyCompetence);
  };

  return (
    <StudentContext.Provider
      value={{ selectedStudent, updateStudent }}
      {...props}
    >
      <SubjectAreaContext.Provider
        value={{ selectedSubjectArea, updateSubjectArea }}
        {...props}
      >
        <LearningSituationContext.Provider
          value={{ selectedLearningSituation, updateLearningSituation }}
          {...props}
        >
          <KeyCompetenceContext.Provider
            value={{ selectedKeyCompetence, updateKeyCompetence }}
            {...props}
          ></KeyCompetenceContext.Provider>
        </LearningSituationContext.Provider>
      </SubjectAreaContext.Provider>
    </StudentContext.Provider>
  );
};
