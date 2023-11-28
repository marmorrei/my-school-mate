import { useState, useEffect } from 'react';
import { type OptionsType } from '../../types/types';
import Select from '../Select/Select';
import curriculum from '../../data/primary-catalan-curriculum.json';
import { useKeyCompetenceContext } from '../../context/EvidenceCollectionProvider';

const KeyCompetence = (): JSX.Element => {
  const { updateKeyCompetence } = useKeyCompetenceContext();
  // OPTIONS FOR EACH SELECT COMPONENT
  const [keyCompetencesList, setKeyCompetencesList] = useState<OptionsType>([
    '',
  ]);
  const [specificCompetencesList, setSpecificCompetencesList] =
    useState<OptionsType>(['']);
  const [assessmentCriteriaList, setAssessmentCriteriaList] =
    useState<OptionsType>(['']);

  // OPTION SELECTED
  const [selectedKC, setSelectedKC] = useState('');
  const [selectedSC, setSelectedSC] = useState('');
  const [selectedAC, setSelectedAC] = useState('');

  // EXTRACT LIST OF KEY COMPETENCES
  useEffect(() => {
    const keyCompList = curriculum['cycle-1']['key-competences'].map(
      item => item.name,
    );
    setKeyCompetencesList(keyCompList);
  }, []);

  // EXTRACT LIST OF SPECIFIC COMPETENCES DEPENDING ON THE KC SELECTED
  useEffect(() => {
    setSelectedSC('');
    const keyCompSelected = curriculum['cycle-1']['key-competences'].find(
      item => item.name === selectedKC,
    );
    const specificCompList = keyCompSelected?.['specific-competences'].map(
      item => item.name,
    );
    setSpecificCompetencesList(specificCompList);
  }, [selectedKC]);

  // EXTRACT LIST OF ASSESSMENT CRITERIA DEPENDING ON THE SC SELECTED
  useEffect(() => {
    setSelectedAC('');
    const keyCompSelected = curriculum['cycle-1']['key-competences'].find(
      item => item.name === selectedKC,
    );
    const specificCompSelected = keyCompSelected?.['specific-competences'].find(
      item => item.name === selectedSC,
    );
    const assessmentCriList = specificCompSelected?.['assessment-criteria'];
    setAssessmentCriteriaList(assessmentCriList);
  }, [selectedKC, selectedSC]);

  // UPDATE EvidenceCollectionForm DATA
  useEffect(() => {
    updateKeyCompetence({
      name: selectedKC,
      specificCompetence: selectedSC,
      assessmentCriteria: selectedAC,
    });
  }, [selectedKC, selectedSC, selectedAC]);

  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <Select
        label='Key competence'
        id='key-competence'
        options={keyCompetencesList}
        name='name'
        setSelection={setSelectedKC}
      />
      <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
        <Select
          label='Specific competence'
          id='key-specific-competence'
          options={specificCompetencesList}
          name='specificCompetence'
          setSelection={setSelectedSC}
        />
        <Select
          label='Assessment criteria'
          id='key-assessment-criteria'
          options={assessmentCriteriaList}
          name='assessmentCriteria'
          setSelection={setSelectedAC}
        />
      </div>
    </div>
  );
};

export default KeyCompetence;
