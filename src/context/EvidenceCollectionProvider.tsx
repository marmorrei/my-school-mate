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
  type EvidenceContextType,
  type FileType,
  type SubmitContextType,
} from '../types/types';

// CREATE CONTEXTS
const StudentContext = createContext<StudentContextType | undefined>(undefined);

const SubjectAreaContext = createContext<SubjectAreaContextType | undefined>(
  undefined,
);

const LearningSituationContext = createContext<
  LearningSituationContextType | undefined
>(undefined);

const KeyCompetenceContext = createContext<
  KeyCompetenceContextType | undefined
>(undefined);

const EvidenceContext = createContext<EvidenceContextType | undefined>(
  undefined,
);

const SubmitContext = createContext<SubmitContextType | undefined>(undefined);

// CUSTOM HOOKS
export const useStudentContext = (): StudentContextType => {
  const studentContext = useContext(StudentContext);
  if (studentContext === undefined)
    throw new Error(
      'useStudentContext must be used within an EvidenceCollectionProvider',
    );
  return studentContext;
};

export const useSubjectAreaContext = (): SubjectAreaContextType => {
  const subjectAreaContext = useContext(SubjectAreaContext);
  if (subjectAreaContext === undefined)
    throw new Error(
      'useSubjectAreaContext must be used within an EvidenceCollectionProvider',
    );
  return subjectAreaContext;
};

export const useLearningSituationContext = (): LearningSituationContextType => {
  const learningSituationContext = useContext(LearningSituationContext);
  if (learningSituationContext === undefined)
    throw new Error(
      'useLearningSituationContext must be used within an EvidenceCollectionProvider',
    );
  return learningSituationContext;
};

export const useKeyCompetenceContext = (): KeyCompetenceContextType => {
  const keyCompetenceContext = useContext(KeyCompetenceContext);
  if (keyCompetenceContext === undefined)
    throw new Error(
      'useKeyCompetenceContext must be used within an EvidenceCollectionProvider',
    );
  return keyCompetenceContext;
};

export const useEvidenceContext = (): EvidenceContextType => {
  const evidenceContext = useContext(EvidenceContext);
  if (evidenceContext === undefined)
    throw new Error(
      'useEvidenceContext must be used within an EvidenceCollectionProvider',
    );
  return evidenceContext;
};

export const useSubmitContext = (): SubmitContextType => {
  const submitContext = useContext(SubmitContext);
  if (submitContext === undefined)
    throw new Error(
      'useSubmitContext must be used within an EvidenceCollectionProvider',
    );
  return submitContext;
};

// CONTEXT PROVIDER
export const EvidenceCollectionProvider = (props: Props): JSX.Element => {
  // useState
  const [selectedStudent, setSelectedStudent] =
    useState<StudentType>(undefined);

  const [selectedSubjectArea, setSelectedSubjectArea] =
    useState<SubjectAreaType>(undefined);

  const [selectedLearningSituation, setSelectedLearningSituation] =
    useState<LearningSituationType>();

  const [selectedKeyCompetence, setSelectedKeyCompetence] =
    useState<KeyCompetenceType>(undefined);

  const [file, setFile] = useState<FileType>(undefined);
  const [comment, setComment] = useState<string | undefined>();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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

  const updateFile = (newFile: FileType): void => {
    setFile(newFile);
  };

  const updateComment = (newComment: string | undefined): void => {
    setComment(newComment);
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
          >
            <EvidenceContext.Provider
              value={{ file, updateFile, comment, updateComment }}
              {...props}
            >
              <SubmitContext.Provider
                value={{ isSubmitted, setIsSubmitted }}
                {...props}
              ></SubmitContext.Provider>
            </EvidenceContext.Provider>
          </KeyCompetenceContext.Provider>
        </LearningSituationContext.Provider>
      </SubjectAreaContext.Provider>
    </StudentContext.Provider>
  );
};
