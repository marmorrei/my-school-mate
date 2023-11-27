import { useState, useEffect } from 'react';
import Select from '../Select/Select';
import { type OptionsType } from '../../types/types';
import curriculum from '../../data/primary-catalan-curriculum.json';

const SubjectArea = (): JSX.Element => {
  const [subjects, setSubjects] = useState<OptionsType>(['']);

  const [selections, setSelections] = useState({
    name: '',
    specificCompetence: '',
    assessmentCriteria: '',
  });
  console.log(selections);

  useEffect(() => {
    const subjectsList = curriculum['cycle-1']['subject-areas'].map(
      subject => subject.name,
    );
    setSubjects(subjectsList);
  }, []);

  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <Select
        label='Subject area'
        id='subject-area'
        options={subjects}
        name='name'
        setSelections={setSelections}
      />
    </div>
  );
};

export default SubjectArea;
