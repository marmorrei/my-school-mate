import { useEffect, useState } from 'react';
import {
  type LearningSituationType,
  type OptionsType,
} from '../../types/types';
import Select from '../Select/Select';
import { fetchLearningSituations } from '../../utils/api/fetchLearningSituations';
import { useLearningSituationContext } from '../../context/EvidenceCollectionProvider';

const LearningSituationSelect = (): JSX.Element => {
  const { updateLearningSituation } = useLearningSituationContext();
  // OPTIONS FOR THE SELECT COMPONENT
  const [learningSituations, setLearningSituations] =
    useState<LearningSituationType[]>();
  const [learningSituationsList, setLearningSituationsList] =
    useState<OptionsType>(['']);

  // OPTION SELECTED
  const [selectedLS, setSelectedLS] = useState<string>('');
  const [completeLS, setCompleteLS] = useState<
    LearningSituationType | undefined
  >(undefined);

  // OBTAIN LEARNING SITUATIONS FROM DATABASE
  useEffect(() => {
    fetchLearningSituations()
      .then(result => {
        setLearningSituations(result);
        const learningSituationsTitles = result?.map(
          (item: { title: string }) => item.title,
        );
        setLearningSituationsList(learningSituationsTitles);
      })
      .then()
      .catch(error => {
        console.log(error);
      });
  }, []);

  // EXTRACT COMPETENCE & CRITERIA OF SELECTED LEARNING SITUATION
  useEffect(() => {
    const completeLearningSituation = learningSituations?.find(
      item => item?.title === selectedLS,
    );
    setCompleteLS(completeLearningSituation);
    console.log(completeLS);
  }, [selectedLS]);

  // UPDATE EvidenceCollectionForm DATA
  useEffect(() => {
    updateLearningSituation(completeLS);
  }, [selectedLS, completeLS]);
  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <Select
        label='Learning situation'
        id='learning-situation'
        options={learningSituationsList}
        name='name'
        setSelection={setSelectedLS}
      />
      <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
        <label htmlFor='specific-competence' className='text-accent font-bold'>
          Specific competence
        </label>
        <div
          id='specific-competence'
          className='border-none rounded-md px-2 py-1 bg-neutral/20 w-full text-primary'
        >
          <p>{completeLS?.specific_competence}</p>
        </div>
        <label htmlFor='assessment-criteria' className='text-accent font-bold'>
          Assessment criteria
        </label>
        <p
          id='assessment-criteria'
          className='border-none rounded-md px-2 py-1 bg-neutral/20 w-full text-primary'
        >
          {completeLS?.assessment_criteria}
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LearningSituationSelect;
