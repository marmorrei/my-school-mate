import { useState, useEffect } from 'react';
import { OptionsType } from '../../types/types';
import Select from '../Select/Select';
import curriculum from '../../data/primary-catalan-curriculum.json';

const KeyCompetence = (): JSX.Element => {
  const [keyCompetences, setKeyCompetences] = useState<OptionsType>(['']);

  const [selections, setSelections] = useState({
    name: '',
    specificCompetence: '',
    assessmentCriteria: '',
  });
  console.log(selections);

  useEffect(() => {
    const keyCompList = curriculum['cycle-1']['key-competences'].map(
      keyComp => keyComp.name,
    );
    setKeyCompetences(keyCompList);
  }, []);

  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <Select
        label='Key competence'
        id='key-competence'
        options={keyCompetences}
        name='name'
        setSelections={setSelections}
      />
    </div>
  );
};

export default KeyCompetence;
