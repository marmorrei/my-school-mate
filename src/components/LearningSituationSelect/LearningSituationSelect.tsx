import { useEffect, useState } from 'react';
import { OptionsType } from '../../types/types';
import Select from '../Select/Select';
import { fetchLearningSituations } from '../../utils/api/fetchLearningSituations';

const LearningSituationSelect = (): JSX.Element => {
  let learningSituationsList: Array<{
    title: string;
    specific_competence: string;
    assessment_criteria: string;
  }>;
  const [learningSituations, setLearningSituations] = useState<OptionsType>([
    '',
  ]);
  const [competences, setCompetences] = useState<OptionsType>(['']);
  const [criteria, setCriteria] = useState<OptionsType>(['']);
  const [selections, setSelections] = useState({
    name: '',
    specificCompetence: '',
    assessmentCriteria: '',
  });

  useEffect(() => {
    fetchLearningSituations()
      .then(result => {
        console.log(result);
        learningSituationsList = result;
        const learningSituationsTitles = result?.map(
          (item: { title: string }) => item.title,
        );
        console.log(learningSituationsList);
        setLearningSituations(learningSituationsTitles);
      })
      .then()
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const selected = learningSituationsList?.map(
      item => item.title === selections.name,
    );
    console.log(selected);
  }, [selections.name]);

  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <Select
        label='Learning situation'
        id='learning-situation'
        options={learningSituations}
        name='name'
        setSelections={setSelections}
      />
      <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
        <Select
          label='Specific competence'
          id='learn-sit-specific-competence'
          options={competences}
          name='specificCompetence'
          setSelections={setSelections}
        />
        <Select
          label='Assessment criteria'
          id='learn-sit-assessment-criteria'
          options={criteria}
          name='assessmentCriteria'
          setSelections={setSelections}
        />
      </div>
    </div>
  );
};

export default LearningSituationSelect;
