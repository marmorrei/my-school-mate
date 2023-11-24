import { useState, useContext, createContext } from 'react';
import {
  StudentContextType,
  SubjectAreaContextType,
  LearningSituationContextType,
  KeyCompetenceContextType,
} from '../types/types';

const studentContext = createContext<StudentContextType | null>(null);
const subjectAreaContext = createContext<SubjectAreaContextType | null>(null);
const learningSituationContext =
  createContext<LearningSituationContextType | null>(null);
const keyCompetenceContext = createContext<KeyCompetenceContextType | null>(
  null,
);

export const useStudentContext = () => useContext(studentContext);
export const useSubjectAreaContext = () => useContext(subjectAreaContext);
export const useLearningSituationContext = () =>
  useContext(learningSituationContext);
export const useKeyCompetenceContext = () => useContext(keyCompetenceContext);

export const EvidenceCollectionProvider = ({
  children,
}: {
  children: any;
}): JSX.Element => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedSubjectArea, setSelectedSubjectArea] = useState(null);
  const [selectedLearningSituation, setSelectedLearningSituation] =
    useState(null);
  const [selectedKeyCompetence, setSelectedKeyCompetence] = useState(null);

  return (
    <studentContext.Provider value={[selectedStudent, setSelectedStudent]}>
      <subjectAreaContext.Provider
        value={[selectedSubjectArea, setSelectedSubjectArea]}
      >
        <learningSituationContext.Provider
          value={[selectedLearningSituation, setSelectedLearningSituation]}
        >
          <keyCompetenceContext.Provider
            value={[selectedKeyCompetence, setSelectedKeyCompetence]}
          >
            {children}
          </keyCompetenceContext.Provider>
        </learningSituationContext.Provider>
      </subjectAreaContext.Provider>
    </studentContext.Provider>
  );
};
