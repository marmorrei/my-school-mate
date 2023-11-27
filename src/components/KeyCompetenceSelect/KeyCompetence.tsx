import { useState, useEffect } from 'react';
import { OptionsType } from '../../types/types';
import Select from '../Select/Select';
import curriculum from '../../data/primary-catalan-curriculum.json';

const KeyCompetence = (): JSX.Element => {
  const [keyCompetences, setKeyCompetences] = useState<OptionsType>(['']);
  const [competences, setCompetences] = useState<OptionsType>(['']);
  const [criteria, setCriteria] = useState<OptionsType>(['']);
  const [selections, setSelections] = useState({
    name: '',
    specificCompetence: '',
    assessmentCriteria: '',
  });

  useEffect(() => {
    const keyCompList = curriculum['cycle-1']['key-competences'].map(
      keyComp => keyComp.name,
    );
    setKeyCompetences(keyCompList);
  }, []);

  useEffect(() => {
    const chosenSubject = curriculum['cycle-1']['subject-areas'].find(
      subject => subject.name === selections.name,
    );
    const competencesList = chosenSubject?.['specific-competences'].map(
      competence => competence.name,
    );
    setCompetences(competencesList);
    console.log(competencesList);
  }, [selections.name]);

  useEffect(() => {
    const chosenCompetence = curriculum['cycle-1']['subject-areas']
      .find(subject => subject.name === selections.name)
      ?.['specific-competences'].find(
        competence => competence.name === selections.specificCompetence,
      );

    const criteriaList = chosenCompetence?.['assessment-criteria'];
    setCriteria(criteriaList);
    console.log(criteriaList);
  }, [selections.name, selections.specificCompetence]);
  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <Select
        label='Key competence'
        id='key-competence'
        options={keyCompetences}
        name='name'
        setSelections={setSelections}
      />
      <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
        <Select
          label='Specific competence'
          id='key-specific-competence'
          options={competences}
          name='specificCompetence'
          setSelections={setSelections}
        />
        <Select
          label='Assessment criteria'
          id='key-assessment-criteria'
          options={criteria}
          name='assessmentCriteria'
          setSelections={setSelections}
        />
      </div>
    </div>
  );
};

export default KeyCompetence;
