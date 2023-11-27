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

  const [selections, setSelections] = useState({
    name: '',
    specificCompetence: '',
    assessmentCriteria: '',
  });
  console.log(selections);

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

  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <Select
        label='Learning situation'
        id='learning-situation'
        options={learningSituations}
        name='name'
        setSelections={setSelections}
      />
    </div>
  );
};

export default LearningSituationSelect;
