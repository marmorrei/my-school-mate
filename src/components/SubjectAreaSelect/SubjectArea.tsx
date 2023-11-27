import { useState, useEffect } from 'react';
import Select from '../Select/Select';
import { type OptionsType } from '../../types/types';
import curriculum from '../../data/primary-catalan-curriculum.json';

const SubjectArea = (): JSX.Element => {
  const [subjects, setSubjects] = useState<OptionsType>(['']);
  const [competences, setCompetences] = useState<OptionsType>(['']);
  const [criteria, setCriteria] = useState<OptionsType>(['']);
  const [selections, setSelections] = useState({
    name: '',
    specificCompetence: '',
    assessmentCriteria: '',
  });

  useEffect(() => {
    const subjectsList = curriculum['cycle-1']['subject-areas'].map(
      subject => subject.name,
    );
    setSubjects(subjectsList);
  }, []);

  useEffect(() => {
    const chosenSubject = curriculum['cycle-1']['subject-areas'].find(
      subject => subject.name === selections.name,
    );
    const competencesList = chosenSubject?.['specific-competences'].map(
      competence => competence.name,
    );
    setCompetences(competencesList);
    // console.log(competencesList);
  }, [selections.name]);

  useEffect(() => {
    const chosenCompetence = curriculum['cycle-1']['subject-areas']
      .find(subject => subject.name === selections.name)
      ?.['specific-competences'].find(
        competence => competence.name === selections.specificCompetence,
      );

    const criteriaList = chosenCompetence?.['assessment-criteria'];
    setCriteria(criteriaList);
    // console.log(criteriaList);
  }, [selections.name, selections.specificCompetence]);

  //   console.log(selections);
  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <Select
        label='Subject area'
        id='subject-area'
        options={subjects}
        name='name'
        setSelections={setSelections}
      />
      <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
        <Select
          label='Specific competence'
          id='subject-specific-competence'
          options={competences}
          name='specificCompetence'
          setSelections={setSelections}
        />
        <Select
          label='Assessment criteria'
          id='subject-assessment-criteria'
          options={criteria}
          name='assessmentCriteria'
          setSelections={setSelections}
        />
      </div>
    </div>
  );
};

export default SubjectArea;
