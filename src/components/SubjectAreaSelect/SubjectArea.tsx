import { useState, useEffect } from 'react';
import Select from '../Select/Select';
import { type OptionsType } from '../../types/types';
import curriculum from '../../data/primary-catalan-curriculum.json';
import {
  useSubjectAreaContext,
  useSubmitContext,
} from '../../context/EvidenceCollectionProvider';

const SubjectArea = (): JSX.Element => {
  const { updateSubjectArea } = useSubjectAreaContext();
  // OPTIONS FOR EACH SELECT COMPONENT
  const [subjectAreaList, setSubjectAreaList] = useState<OptionsType>(['']);
  const [specificCompetencesList, setSpecificCompetencesList] =
    useState<OptionsType>(['']);
  const [assessmentCriteriaList, setAssessmentCriteriaList] =
    useState<OptionsType>(['']);

  // OPTION SELECTED
  const [selectedSA, setSelectedSA] = useState('');
  const [selectedSC, setSelectedSC] = useState('');
  const [selectedAC, setSelectedAC] = useState('');

  const { isSubmitted } = useSubmitContext();

  useEffect(() => {
    setSpecificCompetencesList(['']);
    setAssessmentCriteriaList(['']);
    setSelectedSA('');
    setSelectedSC('');
    setSelectedAC('');
    updateSubjectArea(undefined);
  }, [isSubmitted]);

  // EXTRACT LIST OF SUBJECT AREAS
  useEffect(() => {
    const subjectsList = curriculum['cycle-1']['subject-areas'].map(
      item => item.name,
    );
    setSubjectAreaList(subjectsList);
  }, [isSubmitted]);

  // EXTRACT LIST OF SPECIFIC COMPETENCES DEPENDING ON THE SUBJECT SELECTED
  useEffect(() => {
    setSelectedSC('');
    const subjectSelected = curriculum['cycle-1']['subject-areas'].find(
      item => item.name === selectedSA,
    );
    const specificCompList = subjectSelected?.['specific-competences'].map(
      item => item.name,
    );
    setSpecificCompetencesList(specificCompList);
  }, [selectedSA]);

  // EXTRACT LIST OF ASSESSMENT CRITERIA DEPENDING ON THE SC SELECTED
  useEffect(() => {
    setSelectedAC('');
    const subjectSelected = curriculum['cycle-1']['subject-areas'].find(
      item => item.name === selectedSA,
    );
    const specificCompSelected = subjectSelected?.['specific-competences'].find(
      item => item.name === selectedSC,
    );
    const assessmentCriList = specificCompSelected?.['assessment-criteria'];
    setAssessmentCriteriaList(assessmentCriList);
  }, [selectedSA, selectedSC]);

  // UPDATE EvidenceCollectionForm DATA
  useEffect(() => {
    updateSubjectArea({
      name: selectedSA,
      specificCompetence: selectedSC,
      assessmentCriteria: selectedAC,
    });
  }, [selectedSA, selectedSC, selectedAC]);
  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <Select
        label='Subject area'
        id='subject-area'
        options={subjectAreaList}
        name='name'
        setSelection={setSelectedSA}
      />
      <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
        <Select
          label='Specific competence'
          id='subject-specific-competence'
          options={specificCompetencesList}
          name='specificCompetence'
          setSelection={setSelectedSC}
        />
        <Select
          label='Assessment criteria'
          id='subject-assessment-criteria'
          options={assessmentCriteriaList}
          name='assessmentCriteria'
          setSelection={setSelectedAC}
        />
      </div>
    </div>
  );
};

export default SubjectArea;
